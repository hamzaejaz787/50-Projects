const url = "https://randomuser.me/api/";

const getUser = async () => {
  const res = await fetch(url);
  const data = await res.json();

  const person = data.results[0];

  const { first, last } = person.name;
  const name = `${first} ${last}`;
  const { phone, email } = person;
  const {
    dob: { age },
  } = person;
  const { city, country } = person.location;
  const address = `${city}, ${country}`;
  const { large: image } = person.picture;

  return {
    image,
    phone,
    email,
    address,
    age,
    name,
  };
};

export default getUser;
