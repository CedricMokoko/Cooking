import styles from "./Content.module.scss";
import Recipe from "./Recipe";
export default function Content() {
  return (
    <div className="flex-fill container p-20">
      <h1 className="my-30">Le nostre nuove ricette</h1>
      <div className={`card p-20 ${styles.contentCard}`}>
        <div className={styles.grid}>
          <Recipe
            linkImg={
              "https://images.unsplash.com/photo-1505253668822-42074d58a7c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQwfHxyZWNpcGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            }
          />
          <Recipe
            linkImg={
              "https://images.unsplash.com/photo-1543738066-f1b819c5f69d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjk5fHxyZWNpcGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            }
          />
          <Recipe
            linkImg={
              "https://images.unsplash.com/photo-1625631979614-7ab4aa53d600?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc1fHxyZWNpcGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            }
          />
          <Recipe
            linkImg={
              "https://images.unsplash.com/photo-1627906295804-46770ad5bed7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgyfHxyZWNpcGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            }
          />
          <Recipe
            linkImg={
              "https://images.unsplash.com/photo-1604634077002-15dd4d5f1a33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjcyfHxyZWNpcGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            }
          />
          <Recipe
            linkImg={
              "https://images.unsplash.com/photo-1627906327792-4ede6149189f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjc0fHxyZWNpcGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            }
          />
          <Recipe
            linkImg={
              "https://images.unsplash.com/photo-1516865131505-4dabf2efc692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjc5fHxyZWNpcGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            }
          />
          <Recipe
            linkImg={
              "https://images.unsplash.com/photo-1598514983195-94d7470a4241?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjUwfHxyZWNpcGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            }
          />
          <Recipe
            linkImg={
              "https://images.unsplash.com/photo-1556178675-eb094aaa8447?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjUzfHxyZWNpcGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            }
          />
          <Recipe
            linkImg={
              "https://plus.unsplash.com/premium_photo-1671198540397-1588dc2668ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjMxfHxyZWNpcGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            }
          />
          <Recipe
            linkImg={
              "https://images.unsplash.com/photo-1543738066-d1e2659d4317?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjMyfHxyZWNpcGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            }
          />
        </div>
      </div>
    </div>
  );
}
