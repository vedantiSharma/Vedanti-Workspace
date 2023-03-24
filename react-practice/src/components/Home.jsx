import React from 'react';
import { Link } from 'react-router-dom';
import img from './assets/1.jpg';
import img from './assets/2.jpg';
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from 'react-icons/ai';

const Header = () => {
  return (
    <>
      <div className="home">
        <main>
          <h1>TechyStart.</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src=" 2.jpg" alt="Graphics" />
        <div>
          <p>
            SSL/TLS certificates are essential for enabling HTTPS on your
            servers(to performs encryption/ decryption) but if they are not used
            wisely (specially if their private keys are not protected safely)
            then this can cause data leaks by any attackers/hackers.
          </p>
        </div>
      </div>

      <div className="home3">
        <h1>Who we are?</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>

      <div className="home4">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                AnimationDelay: '0.3s',
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                AnimationDelay: '0.5s ',
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                AnimationDelay: '0.7s ',
              }}
            >
              <AiFillYoutube />
              <p>YouTube</p>
            </div>

            <div
              style={{
                AnimationDelay: '0.9s ',
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Header;
