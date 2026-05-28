import css from "./Profile.module.css";
import defaultAvatar from "../../images/default-avatar-user.png";

export default function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img
          src={avatar || defaultAvatar}
          alt={username}
          className={css.avatar}
          onError={(e) => {
            e.target.src = defaultAvatar;
          }}
        />

        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>

        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>

        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
