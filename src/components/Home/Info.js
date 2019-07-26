import React from 'react'
import { Link } from 'gatsby'
import Title from '../Globals/Title'

export default function Info() {
    return (
        <section className="py-5">
            <div className="container">
                <Title title="Our Story"></Title>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-muted mb-5">
                        Ipsum sint esse ad tempor velit ea veniam laboris eiusmod nulla deserunt dolor exercitation commodo. Officia elit laborum enim ea dolore eu in tempor mollit fugiat consectetur Lorem. Ad cillum officia cillum duis mollit ex. Velit anim et elit elit exercitation labore mollit duis do duis elit commodo. Deserunt anim et aliqua nostrud incididunt ipsum.

                        Quis ad in nostrud sint excepteur pariatur duis Lorem minim consequat. Anim nisi aliqua quis qui. Ut magna ad eiusmod esse voluptate labore ea et ex ipsum sunt. Dolor cupidatat ex tempor eiusmod. Cupidatat aute nostrud cillum consequat amet velit deserunt nisi esse. Anim ea labore reprehenderit voluptate aute consectetur est fugiat irure laboris ex sint. Pariatur in duis et elit ad ut.
                        </p>
                        <Link to="/about/">
                            <button className="btn text-uppercase btn-yellow">about page</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
