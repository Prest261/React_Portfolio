import React from "react";
import Image from 'react-bootstrap/Image'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
    return (
        // remember => a component(function) can only return ONE thing!!

        <>
            <Row>
                <Col xs={12} md={12}>
                    <h2>About Me</h2>
                    <hr></hr>
                </Col>
            </Row>
            <Row>
                <Col>

                    <Image id="sydPic" src="../images/Sydney.jpg" rounded></Image>

                    <p class="wrap-text">My name is Sydney Preston and I am from Olympia Washington, but I’ve lived in
                    several other states throughout my life.
                    I was raised by my mother and in sixth grade we made our first big move to the outskirts of Chicago.
                    We stayed in Chicago for a year and a half before moving to Raleigh, North Carolina.
                    After graduating high school, I got accepted to the University of Minnesota and moved to
                    Minneapolis; where I studied photography and graduated in 2016 with a fine arts degree.</p>

                    <p class="wrap-text">In 2017 I decided to make a big life change and move to Colorado. Before I moved, I
                    was working as a design engineer at a printing company.
                    It wasn’t the job for me, so I decided to take a step back and figure out what I wanted to do.
                    I began working at Starbucks and I have since worked my way up from Barista to Shift Supervisor.
                    I still work at Starbucks, but I have moved my focus to learning web development so that I can make
                    a career change.
                    Hopefully by next summer I can begin a new career in the tech industry.</p>

                    <p class="wrap-text">Since moving to Colorado, I have experienced a lot of growth in my personal life as
                    well as finding a career path I’d like to pursue.
                    After moving I began my journey of aerial dance and aerial performance.
                    I found a studio that has become such an important part of my life and I can’t imagine life without
                    all my aerial friends.
                    In my free time I enjoy aerial dance, performing, snowboarding, hiking, listening to live music, and
                    enjoying time with friends.
                    I am excited to continue pursuing aerial dance in my freetime as well as to see where this new
                    career path will take me! </p>

                </Col>
            </Row>

        </>
    )

};

export default About;