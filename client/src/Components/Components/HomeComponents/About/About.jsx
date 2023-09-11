import React from 'react';
import styles from './About.module.css';

const About = () => {
    const body = "The Students' Gymkhana is the students' government organization of The LNMIIT, Jaipur. Established in 2006, the Gymkhana seeks to cultivate qualities of leadership amongst students to foster a corporate life and to advance the general cause of the student body of the student body of the Institute. It aims at promoting and developing organizational abilities in students. It has been successful over the years in evolving a well-informed, articulate and participatory student community life. It has been instrumental in identifying student issues and promoting discussion on them. It functions as the office for all election and nominations of students for gymkhana activities. The Students' Gymkhana functions mainly through the Students' Senate, an elected representative body and the elected executives: the President, General Secretary Cultural Council, General Secretary Science and Technology Council, General Secretary Games and Sports Council. The Senate lays down the general guideline for the functions of the executives and their associated councils. The Senators elect their own Senate Convener."


    return (
        <div className={styles.about}>
            <h2 className={styles.heading}>About Us</h2>
            <div className={styles.body}>
                <div className={styles.text_box}>
                    {body}
                </div>
                <div className={styles.image}>
                    <img src="./gymkhana-logo.png" alt="" />
                </div>
            </div>
        </div>
    )
};

export default About;