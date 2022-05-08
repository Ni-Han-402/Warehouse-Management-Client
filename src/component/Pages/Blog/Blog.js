import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='container'>
            <div className="blogs">
                <div className="blog">
                    <h4>Differences Between JavaScript vs Node JS</h4>
                    <ul className='blog-ans'>
                        <li>
                            <p>JavaScript</p>
                            <ul>
                                <li>JavaScript is a programming language. It is running in any web browser with a proper browser engine.</li>
                                <li>Mainly using for any client-side activity for a web application, like possible attribute validation or refreshing the page in a specific interval or provide some dynamic changes in web pages without refreshing the page.</li>
                                <li>JavaScript running any engine like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome).</li>
                            </ul>
                        </li>
                        <li>
                            <p>Node JS</p>
                            <ul>
                                <li>It is an interpreter and environment for JavaScript with some specific useful libraries which JavaScript programming can use separately.</li>
                                <li>It mainly used for accessing or performing any non-blocking operation of any operating system, like creating or executing a shell script or accessing any hardware-specific information or running any backend job.</li>
                                <li>Node JS only run in a V8 engine which mainly used by google chrome. And javascript program which will be written under this Node JS will be always run in V8 Engine.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="blog">
                    <h4>When should you use nodejs and when should you use mongodb</h4>
                    <ul className='blog-ans'>
                        <li>
                            <p>When should you use nodejs</p>
                        <small>Any project needs a programming environment and a runtime library that offers you basic programming tools/support and can compile and/or interpret your code. Nodejs is such as tool for the Javascript programming language. There are other similar tools for other languages such as Python, Java, PHP, C#, C++, Go, etc...

                                So, if you want to write some kind of stand-alone program or server in Javascript, then you can use nodejs for it.</small>
                        </li>
                        <li>
                            <p>when should you use mongodb</p>
                            <small>If your application needs the ability to persistently store data in a way that you can efficiently query or update it later, then you would typically use some form of database. There are dozens of popular databases. MongoDB is one such database. MariaDB, MySql, CouchDB, DynamoDB (on AWS), Postgres are examples of other databases. Different databases have different strengths (things they are best at) and different ways of using them so it's a whole different question to choose the right/best database for what you're doing.</small>
                        </li>
                    </ul>
                </div>
                <div className="blog">
                    <h4>Differences between sql and nosql databases</h4>
                    <ul className='blog-ans'>
                        <li>
                            <p>SQL</p>
                            <ul>
                                <li>SQL databases are relational.</li>
                                <li>SQL databases use structured query language and have a predefined schema.</li>
                                <li>SQL databases are vertically scalable.</li>
                                <li>SQL databases are table-based.</li>
                                <li>SQL databases are better for multi-row transactions.</li>
                            </ul>
                        </li>
                        <li>
                            <p>NoSQL</p>
                            <ul>
                                <li>NoSQL databases are non-relational.</li>
                                <li>NoSQL databases have dynamic schemas for unstructured data.</li>
                                <li>NoSQL databases are horizontally scalable.</li>
                                <li>NoSQL databases are document, key-value, graph, or wide-column stores.</li>
                                <li>NoSQL is better for unstructured data like documents or JSON.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Blog;