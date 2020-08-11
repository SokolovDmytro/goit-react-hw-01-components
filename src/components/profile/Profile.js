import React from 'react';
import styles from './Profile.module.css';

const Profile = ({ user: {name, location, tag, avatar, stats:{followers, views, likes}} }) => {
    return (
      <div className={styles.profile}>
        <div className={styles.description}>
          <img src={avatar} alt="user avatar" className={styles.avatar} />
          <p className={styles.name}>{name}</p>
          <p className={styles.tag}>{tag}</p>
          <p className={styles.location}>{location}</p>
        </div>
  
        <ul className={styles.stats}>
          <li>
            <span className={styles.label}>Followers</span>
            <span className={styles.quantity}>{followers}</span>
          </li>
          <li>
            <span className={styles.label}>Views</span>
            <span className={styles.quantity}>{views}</span>
          </li>
          <li>
            <span className={styles.label}>Likes</span>
            <span className={styles.quantity}>{likes}</span>
          </li>
        </ul>
      </div>
    );
  };

  export default Profile;