import React from 'react';

const App = () => {
    return (
        <div style={{ display: "flex", justifyContent: "center" }} >
            <main style={{ maxWidth: '400px' }}>
                <h1>Jascha Huisman</h1>
                <hr />
                <div id="jaschahuisman-maintenance">
                    <h2>This website is under maintenance</h2>
                    <p>I'm currently building a new website. Please visit later!</p>
                </div>
                <hr />
                <div id="jaschahuisman-contact">
                    <h2>Contact</h2>
                    <ul>
                        <li><a href="mailto:info@jaschahuisman.nl">info@jaschahuisman.nl</a></li>
                        <li><a href="tel:+31611808827">+31(6)11808827</a></li>
                    </ul>
                </div>
                <hr />
                <div id="jaschahuisman-follow">
                    <h2>Follow my work</h2>
                    <ul>
                        <li><a href="https://www.behance.net/jaschahuisman/">Behance</a></li>
                        <li><a href="https://www.instagram.com/jaschahuisman/">Instagram</a></li>
                        <li><a href="https://www.github.com/jaschahuisman/">GitHub</a></li>
                    </ul>
                </div>
                <hr />
                <div id="jaschahuisman-about">
                    <h2>About me</h2>
                    <p>
                        Hi. I am Jascha Huisman, born in Dordrecht, The Netherlands. Since my legs can carry me,
                        I have been in touch with tech, art and design. I have carried camera’s, paint brushes,
                        computers, screwdrivers, hammers, harddisks and instruments.
                    </p>
                    <p>
                        At an early age I always longed to go back home during the holidays, because that’s where
                        the computer was. I had the drive to create something every single day. Fortunately,
                        the world is different now, and computers are portable. Along the road I gradually
                        gained a full pallet of designing and developing expertise. The majority of
                        people I have met refer to me as a digital wizard.
                    </p>
                    <p>
                        In 2019 I started a bachelor of applied sciences in communication and multimedia design,
                        at Avans Hogeschool in Breda. In two years I learned even more skills, such as design thinking,
                        and working with modern technologies like artificial intelligence.
                    </p>
                </div>
            </main>
        </div>
    )
}

export default App;