const profile = {
  age: 20,
  name: 'Javad',
  lname: 'Malek Shahkoohi',
  coords: {
    lat: 0,
    lng: 1,
  },
  setAge(age: number): void {
    this.age = age;
  },
  setName(name: string): void {
    this.name = name;
  },
};

const { name, age }: { name: string; age: number; lname: string } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
