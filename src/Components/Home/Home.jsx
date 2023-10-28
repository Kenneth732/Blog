import React from 'react'
import './Home.css'
import userBlog from '../userData'
import latestBlog from '../latest'

function Home() {
    return (
        <div>
            <main>
                <article>
                    <section className="section hero" aria-label="home">
                        <div className="container">

                            <h1 className="h1 hero-title">
                                <strong className="strong">Hey, we’re Blogy.</strong> See our thoughts, stories and ideas.
                            </h1>

                            <div className="wrapper">

                                <form action="" className="newsletter-form">
                                    <input type="email" name="email_address" placeholder="Your email address" className="email-field" />

                                    <button type="submit" className="btn">Subscribe</button>
                                </form>

                                <p className="newsletter-text">
                                    Get the email newsletter and unlock access to members-only content and updates
                                </p>

                            </div>

                        </div>
                    </section>


          

 



                </article>
            </main>
        </div>
    )
}

export default Home