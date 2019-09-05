export class Pet {
  id: string;
  name: string;
  type: string;
  breed: string;
  sex: string;
  size: string;
  description: string;
  petPhotoPath: string;
  lastKnownLocation: string;
  petOwner: string;
  state: string;

  // tslint:disable-next-line:max-line-length
  constructor(id: string, name: string, type: string, breed: string, sex: string, size: string, description: string, petPhotoPath: string, lastKnownLocation: string, petOwner: string, state: string) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.breed = breed;
    this.sex = sex;
    this.size = size;
    this.description = description;
    this.petPhotoPath = petPhotoPath;
    this.lastKnownLocation = lastKnownLocation;
    this.petOwner = petOwner;
    this.state = state;
  }
}
