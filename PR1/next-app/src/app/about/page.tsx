import Link from "next/link";

export default function About() {
  return (
    <div className="container">
      <h1 className="about-h">About Page</h1>

      <p className='about-p'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates alias nemo magnam qui molestias repellat sit est et culpa rem, quidem fugiat libero itaque corporis nesciunt assumenda dolor vero iusto repudiandae sunt architecto ducimus fuga! Expedita recusandae quae corporis accusantium, perferendis sunt corrupti ut fugit, animi, ab debitis reiciendis reprehenderit praesentium architecto perspiciatis veniam sint suscipit. Id deleniti rerum illum expedita quaerat numquam blanditiis voluptas eos, similique quis in delectus soluta maiores placeat esse officiis reprehenderit nobis eligendi ut dolores fugiat. Corrupti in sequi accusamus non nostrum est doloribus beatae obcaecati praesentium deserunt, aspernatur laudantium atque enim officia ipsa fuga, possimus numquam exercitationem rem quia doloremque. Assumenda fugiat dolorem id inventore aspernatur error, molestiae vitae consequatur? Odit ipsa quibusdam culpa animi, assumenda quos nam accusamus eveniet sed eaque consectetur quidem itaque quo maiores nisi dolor! Atque, sapiente. Aliquam quia maiores, delectus nostrum similique cumque ut doloremque expedita nam optio! Culpa deserunt totam veritatis dignissimos ad similique voluptatum itaque illo quos ipsam perspiciatis non voluptatem, quam velit, dicta sit voluptate? Officia, aspernatur! Reprehenderit quis ipsa hic, laboriosam repellendus magni voluptatum saepe eius libero mollitia nulla pariatur voluptatem eveniet dolorem voluptas placeat non quos numquam sapiente cumque ut! Magni dolorum natus libero?
      </p>

      <Link href="/" className="about-link">
        Back to Home
      </Link>
    </div>
  );
}