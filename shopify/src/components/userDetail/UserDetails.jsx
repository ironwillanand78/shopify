 
 
 import Navbar from '../navbar/Navbar';
import styles from './userdetails.module.css'
import userDetails from './userDetails'
import { useState } from 'react';
const UserDetails = () =>{
        const [filteredUsers, setFilteredUsers] = useState(userDetails);
      
        const filterUsers = (gender) => {
          if (gender === "all") {
            setFilteredUsers(userDetails);
          } else {
            setFilteredUsers(userDetails.filter((user) => user.gender === gender));
          }
        }
    return (
        <div>
        <Navbar/>
        <div  className={styles.userDetails}>
            <h1>User Details</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam ipsum aspernatur atque consequatur assumenda fuga libero a! Iusto ullam aliquam sunt quos minima facere ex quibusdam voluptatum eligendi autem, quisquam adipisci aliquid cumque a assumenda aut dolorem, porro ipsa explicabo! Ab in ullam provident distinctio accusamus dolorum nam aspernatur quia rem iure, corporis sit consectetur sequi blanditiis nemo explicabo, quas maxime molestias sunt. Rerum repellat excepturi illo eius minus commodi, atque laudantium quis necessitatibus suscipit omnis aut delectus. Excepturi totam a adipisci sequi quis, numquam ullam voluptatibus quibusdam repudiandae quae at ratione odit quasi omnis tempore ea maiores corporis assumenda.</p>

            <fieldset className={styles.filterSection}>
    <legend>Filter Based on Gender</legend>
    <p>Select a gender to filter users.</p>
    <div className={styles.labelDiv}>
            <label>
              <input
                type="radio"
                name="gender"
                value="all"
                defaultChecked
                onClick={() => filterUsers("all")}
              />{" "}
              All
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                onClick={() => filterUsers("male")}
              />{" "}
              Male
            </label>

            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                onClick={() => filterUsers("female")}
              />{" "}
              Female
            </label>
          </div>
</fieldset>
        </div>
        <div className={styles.tableContainer}>
      <table className={styles.userTable}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>

          {filteredUsers.map((userObj, index) => (
            <tr key={index}>
              <td>
                <img src={userObj.image} alt={userObj.name} className={styles.userImage} />
              </td>
              <td>{userObj.name}</td>
              <td>{userObj.email}</td>
              <td>{userObj.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    )

}
export default UserDetails;
