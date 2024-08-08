import React from "react";
// import check from '../../../assets/courses/checkIcon.png';
import styles from "./Courses.module.css";
import {Check} from "../Check/Check"
export const Courses = () => {
  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">
              <strong>Basic</strong>
            </th>
            <th scope="col">
              <strong>Standard</strong>
            </th>
            <th scope="col">
              <strong>Premium</strong>
            </th>
            <th scope="col">
              <strong>Managed</strong>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">HDD Storage</th>
            <td data-label="Basic">700 MB</td>
            <td data-label="Standard">1.5 GB</td>
            <td data-label="Premium">50 GB</td>
            <td data-label="Managed">up to 5T</td>
          </tr>
          <tr>
            <th scope="row">Web Server</th>
            <td data-label="Basic">
              <Check/>
            </td>
            <td data-label="Standard">
              <Check/>
            </td>
            <td data-label="Premium">
              <Check/>
            </td>
            <td data-label="Managed">
              <Check/>
            </td>
          </tr>
          <tr>
            <th scope="row">Database</th>
            <td data-label="Basic">-</td>
            <td data-label="Standard">Optional</td>
            <td data-label="Premium">
              <Check/>
            </td>
            <td data-label="Managed">
              <Check/>
            </td>
          </tr>
          <tr>
            <th scope="row">DNS</th>
            <td data-label="Basic">-</td>
            <td data-label="Standard">-</td>
            <td data-label="Premium">
              <Check/>
            </td>
            <td data-label="Managed">
              <Check/>
            </td>
          </tr>
          <tr>
            <th scope="row">Backups</th>
            <td data-label="Basic">-</td>
            <td data-label="Standard">-</td>
            <td data-label="Premium">
              <Check/>
            </td>
            <td data-label="Managed">
              <Check/>
            </td>
          </tr>
          <tr>
            <th scope="row">Tech Support</th>
            <td data-label="Basic">None</td>
            <td data-label="Standard">35$/incident</td>
            <td data-label="Premium">15$/incident</td>
            <td data-label="Managed">24/7 included</td>
          </tr>
          <tr>
            <th scope="row">Pricing</th>
            <td data-label="Basic">Free</td>
            <td data-label="Standard">$99/mo</td>
            <td data-label="Premium">$179/mo</td>
            <td data-label="Managed">
              <a href="#contact" className={styles.contact}>Contact us</a>
            </td>
          </tr>
          <tr>
            <th>Buy Now</th>
            <td data-label="Basic">
              <button>Sign-up</button>
            </td>
            <td data-label="Standard">
              <button>Buy Now</button>
            </td>
            <td data-label="Premium">
              <button>Buy Now</button>
            </td>
            <td data-label="Managed">Custom Pricing</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}