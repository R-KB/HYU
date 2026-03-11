export default function RecipeMain() {
  return (
    <div className="recipe__main">
      <div className="img__recipe--main">
        <img src="https://placehold.jp/150x150.png" alt="" />
        <img src="https://placehold.jp/150x150.png" alt="" />
        <img src="https://placehold.jp/150x150.png" alt="" />
      </div>

      <hr />

      <div className="recipe__howto">
        {/* dbに保存されたレシピ本文 */}
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit optio quia consequuntur perspiciatis, officiis ea, cumque incidunt quam totam voluptatum nam quisquam natus atque quasi explicabo doloremque sint sed quas?
        <hr />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta incidunt libero in saepe, reprehenderit sequi, doloribus nobis recusandae beatae enim est modi optio expedita perferendis praesentium fuga adipisci nostrum? Saepe.
        <hr />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae voluptatibus quam ducimus explicabo tempora hic suscipit ratione natus praesentium obcaecati earum eaque, inventore id, quibusdam cum, vel cumque incidunt dolorum.
      </div>

    </div>
  );
}
