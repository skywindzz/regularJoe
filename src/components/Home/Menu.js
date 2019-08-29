import React, { Component } from 'react'
import Title from '../Globals/Title'
import Img from 'gatsby-image'
import { throws } from 'assert';

const getCategories = items => {
    let tempItems = items.map(item => { 
        return item.node.category;
    })
    let tempCategories = new Set(tempItems);
    let categories = Array.from(tempCategories);
    categories = ['all', ...categories];
    return categories;
};

{/* we have items and coffeeItems because we want to keep items intact if we need access to original value and coffeeItems can be change to suit our needs */}

export default class Menu extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            items: props.items.edges,
            coffeeItems: props.items.edges,
            categories: getCategories(props.items.edges)
        }
    }

    handleItems = (category) => { 
        let tempItems = [...this.state.items];

        if (category === 'all') {
            this.setState(() => {
                return { coffeeItems: tempItems }
            })
        } else {
            let items = tempItems.filter(({ node }) => node.category === category)
            
            this.setState(() => { 
                return { coffeeItems: items }
            })
        }
           
    }
    

    render() {  
            if (this.state.items.length > 0) {
                return (
                    <section className="menu py-5">
                        <div className="container">
                            <Title title="Best of our menu" />
                            {/* categories */}
                            .
                            <div className="row mb-5">
                                <div className="col-10 mx-auto text-center">
                                    {this.state.categories.map((category, index) => { 
                                        return (<button type="button" key={index} className='btn btn-yellow text-capitalize m-3' onClick={() => {this.handleItems(category)}}>{category}</button>)
                                    })}
                                </div>
                            </div>
                            
                            {/* items */}
                            {/* the node from the .map comes from destructure from the edges in coffeeItems in contenful */}
                            <div className="row">
                                {this.state.coffeeItems.map(({ node }) => {
                                    return (
                                        <div key={node.id} className="col-11 col-md-6 my-3 d-flex mx-auto">
                                            <div>
                                                <Img fixed={node.image.fixed} />
                                            </div>
                                            {/* item text */}
                                            <div className="flex-grow-1 px-3">
                                                <div className="d-flex justify-content-between">
                                                    <h6 className="mb-0">
                                                        <small>{node.title}</small>
                                                    </h6>
                                                    <h6 className="mb-0 yellow-text">
                                                        <small className="mb-0 text-yellow">${node.price}</small>
                                                    </h6>
                                                </div>
                                                <p className="text-muted">
                                                    {node.description.description}
                                                </p>
                                            </div>

                                        </div>
                                )
                            })}
                            </div>
                        </div>
                    </section>
                )
            } else {
                return (
                    <section className="menu py-5">
                        <div className="container">
                            <Title title="best of our menu" />
                            <div className="row">
                                <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
                                    <h1>there are no items on display</h1>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            }
        }
}

