import React from 'react'
import {
    useViewportScroll,
    motion,
    useTransform,
    useAnimation,
} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactComponent as Arrow1 } from '../images/Arrow 1.svg'
import resume from '../images/my_cv.pdf'



const transition = { duration: 1.5, ease: [.6, -.05, .01, .9] }

const About = ({ onCursor }) => {
    const { scrollY } = useViewportScroll();

    const y1 = useTransform(scrollY, [0, 4000], [0, -650])

    const animation = useAnimation()

    const [ref, inView] = useInView({
        triggerOnce: true
    })

    const [ref2, inView2] = useInView({
        triggerOnce: true
    })

    React.useEffect(() => {

        inView && animation.start('visible')
        inView2 && animation.start('visible2')

    }, [animation, inView, inView2])


    return (
        <>
            <section className="about maxwidth">
                <div id="about" className="about__main">
                    <motion.div className="me" alt="Asad" style={{ y: y1 }} />
                    <div className="text">
                        <h1>Passionate</h1>
                        <h1 className="text__second">Front End Dev</h1>
                        <motion.div className="text__inner"
                            ref={ref}
                            animate={animation}
                            initial='hidden'
                            variants={{
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: transition
                                },
                                hidden: {
                                    opacity: 0,
                                    y: 72
                                }
                            }}
                        >
                            <p>I am a Front End Developer with a proven track record in website development, possessing advanced skills in HTML, SASS, CSS, jQuery, and JavaScript, including expertise in libraries such as ReactJs and Redux. I have experience in developing on popular platforms like Shopify and WordPress, and I am currently expanding my knowledge base to encompass back-end technologies, including PHP, Go (Golang), and SQL. With a Bachelor's degree in Information Technology, I am a skilled and dedicated engineering professional.
                            </p>

                            <p className="interest">
                            In my previous role as a Front End Developer at Digital Poin8 from March 2018 to February 2023, I developed and maintained responsive websites and web applications using HTML5, CSS3, and JavaScript, adhering to industry standards and best practices. I collaborated with UI/UX designers and back-end developers to implement features and ensure seamless integration with the back-end system. I worked with version control systems such as Github to manage code changes and facilitate team collaboration. Additionally, I optimized website performance by optimizing code, images, and other assets to reduce page load times and improve user experience. I also debugged and resolved cross-browser compatibility issues to ensure the website/application worked as intended on all major web browsers. Finally, I utilized various front-end frameworks and libraries, such as Bootstrap and React, to speed up development and improve scalability.
                            </p>

                            <p className="interest">
                            Overall, I possess advanced skills in HTML, CSS, and JavaScript, and I am experienced in front-end development. I am also currently expanding my knowledge base to include back-end technologies. With my strong educational background and certifications, including a Bachelor of Science in Information Technology and IBM Full Stack Software Developer Specialization Certificate, I am confident in my ability to make valuable contributions to any organization.
                            </p>


                            <button className="btn" onMouseLeave={onCursor} onMouseEnter={() => onCursor("hovered")}>
                                <div className="arrow">
                                    <Arrow1 className="a1" />
                                </div>
                                <a href={resume} download>Resume</a>
                            </button>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    ref={ref2}
                    animate={animation}
                    initial='hidden'
                    variants={{
                        visible2: {
                            opacity: 1,
                            y: 0,
                            transition: transition
                        },
                        hidden: {
                            opacity: 0,
                            y: 72
                        }
                    }}
                    className="tech-stack container">
                    <h3>tech - stack</h3>
                    <ul>
                        <li>HTML (advanced)</li>
                        <li>CSS (advanced)</li>
                        <li>Bootstrap (advanced)</li>
                        <li>SCSS/SASS (advanced)</li>
                        <li>JavaScript (advanced)</li>
                        <li>ReactJS (advanced)</li>
                        <li>GatsbyJS (intermediate)</li>
                        <li>JQuery (advanced)</li>
                        <li>Go (beginner)</li>
                        <li>PHP (beginner)</li>
                        <li>SQL (beginner)</li>
                        <li>Shopify (advanced)</li>
                        <li>WordPress (advanced)</li>
                        <li>GIT (advanced)</li>
                    </ul>
                </motion.div>
            </section>
        </>
    )
}

export default About
