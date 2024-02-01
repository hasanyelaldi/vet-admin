import Image from "next/image";
import Link from "next/link";
import styles from "@/app/ui/dashboard/pets/pets.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchPets } from "@/app/lib/data";
import { deletePet } from "@/app/lib/actions";

const PetsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, pets } = await fetchPets(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a pet..." />
        <Link href="/dashboard/pets/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Type</td>
            <td>Species</td>
            <td>Age</td>
            <td>Gender</td>
            <td>Weight</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {pets.map((pet) => (
            <tr key={pet.id}>
              <td>
                <div className={styles.pet}>
                  <Image
                    src={pet.img || "/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.petImage}
                  />
                  {pet.name}
                </div>
              </td>
              <td>{pet.type}</td>
              <td>{pet.species}</td>
              <td>{pet.age}</td>
              <td>{pet.gender}</td>
              <td>{pet.weight}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/pets/${pet.id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  <form 
                  action={deletePet}
                  >
                    <input type="hidden" name="id" value={pet.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default PetsPage;