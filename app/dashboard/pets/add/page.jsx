import { addPet } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/pets/addPet/addPet.module.css";

const AddPetPage = () => {
  return (
    <div className={styles.container}>
      <form action={addPet} className={styles.form}>
        <input type="text" placeholder="name" name="name" required />
        <input type="text" placeholder="age" name="age" required />
        <input type="text" placeholder="weight" name="weight" required />
        <input type="text" placeholder="species" name="species" />
        <select name="type" id="type">
          <option value="unknown">
            Type
          </option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="bird">Bird</option>
        </select>
        <select name="gender" id="gender">
          <option value="unknown">
            Gender
          </option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>

        <textarea
          name="info"
          id="info"
          rows="16"
          placeholder="Information"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddPetPage;