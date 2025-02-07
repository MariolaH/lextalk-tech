import { Developer } from "./components/Developer";

export default function Team() {
  const devData = {
    dev: [
      {
        name: "Ember Borja",
        image: "/images/conferenceTalk.jpg",
        alt: "placeholder image",
        bio: "Hi! I'm Ember. I'm a developer in Lexington, Kentucky, a trans woman, and an organizer for several community groups in town. Please reach out and chat! :)",
      },
      {
        name: "Neal Powers",
        image: "/images/Neal.JPG",
        alt: "Neal over the Seattle skyline",
        bio: "My name is Neal Powers. I'm a freelance developer from Lexington, Kentucky looking for my first role at a company! I have a varied background in music and photography and love all things JavaScript!",
      },
    ],
  };

  const developers = devData.dev.map((dev) => (
    <Developer key={dev.name} devData={dev} />
  ));

  return (
    <div className="font-montserrat mx-4">
      <h1 className="text-3xl text-center my-8">
        This website wouldn&apos;t be possible the work of the following
        developers:
      </h1>
      {developers}
    </div>
  );
}
