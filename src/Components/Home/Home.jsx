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


                    <section class="section featured" aria-label="featured post">
                        <div class="container">

                            <p class="section-subtitle">
                                Get started with our <strong class="strong">best stories</strong>
                            </p>

                            <ul class="has-scrollbar">
                                {userBlog.map((user) => (
                                    <li class="scrollbar-item" key={user.id}>
                                        <div class="blog-card">

                                            <figure class="card-banner img-holder" style={{ "--width": "500", "--height": "600" }} >
                                                <img src={user.image} style={{ "width": "500", "height": "600" }} loading="lazy"
                                                    alt="New technology is not good or evil in and of itself" class="img-cover" />

                                                <ul class="avatar-list absolute">

                                                    <li class="avatar-item">
                                                        <a href="#" class="avatar img-holder" style={{ "--width": "100", "--height": "100" }} >
                                                            <img src={user.authour1} style={{ "width": "100", "height": "100" }} loading="lazy" alt="Author"
                                                                class="img-cover" />
                                                        </a>
                                                    </li>

                                                    <li class="avatar-item">
                                                        <a href="#" class="avatar img-holder" style={{ "--width": "100", "--height": "100" }} >
                                                            <img src={user.authour2} style={{ "width": "100", "height": "100" }} loading="lazy" alt="Author"
                                                                class="img-cover" />
                                                        </a>
                                                    </li>

                                                </ul>
                                            </figure>

                                            <div class="card-content">

                                                <ul class="card-meta-list">

                                                    <li>
                                                        <a href="#" class="card-tag">{user.design}</a>
                                                    </li>

                                                    <li>
                                                        <a href="#" class="card-tag">{user.idea}</a>
                                                    </li>

                                                    <li>
                                                        <a href="#" class="card-tag">{user.review}</a>
                                                    </li>

                                                </ul>

                                                <h3 class="h4">
                                                    <a href="#" class="card-title hover:underline">
                                                        {user.title}
                                                    </a>
                                                </h3>

                                                <p class="card-text">
                                                    {user.description}
                                                </p>

                                            </div>

                                        </div>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </section>

 



                </article>
            </main>
        </div>
    )
}

export default Home