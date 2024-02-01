import { updatePet } from "@/app/lib/actions";
import { fetchPet } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/pets/singlePet/singlePet.module.css";
import Image from "next/image";

const SinglePetPage = async ({ params }) => {
  const { id } = params;
  const pet = await fetchPet(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        {pet.name}
      </div>
      <div className={styles.formContainer}>
        <form action={updatePet} className={styles.form}>
          <input type="hidden" name="id" value={pet.id} />
          
          <label>Name</label>
          <input type="text" name="name" placeholder={pet.name} />
          
          <label>Age</label>
          <input type="number" name="age" placeholder={pet.age} />
          
          <label>Weight</label>
          <input type="number" name="weight" placeholder={pet.weight} />
          
          <label>Species</label>
          <input type="text" name="species" placeholder={pet.species} />
          
          <label>Type</label>
          <input
            type="text"
            name="type"
            placeholder={pet.type || "unknown"}
          />

          <label>Gender</label>
          <input
            type="text"
            name="gender"
            placeholder={pet.gender || "unknown"}
          />
          
          <label>Information</label>
          <textarea
            name="info"
            id="info"
            rows="10"
            placeholder={pet.info}
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SinglePetPage;