import {Injectable} from '@angular/core';
import {Pet} from './pet.model';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PetService {
  // httpService: HttpClient;
  // pets: Pet[] = [];
  pets: any[];

  constructor(private http: HttpClient) { }

  getPets() {
    return this.http.get('http://helpet-api.localhost/wp-json/helpet-api-ext/v1/pets');
  }

  getUpdatesFromPets() {
    // Set up our HTTP request
    const xhr = new XMLHttpRequest();

    // Setup our listener to process completed requests
    xhr.onload = () => {

      // Process our return data
      if (xhr.status >= 200 && xhr.status < 300) {
        // What do when the request is successful
        console.log('success!');
        // console.log(JSON.parse(xhr.response).pets);
        const petData = JSON.parse(xhr.response).pets;
        petData.forEach(data => {
          // tslint:disable-next-line:one-variable-per-declaration
          const petID = data.id,
            name = data.title,
            pet_owner = data.pet_owner,
            type = data.type,
            breed = data.breed,
            sex = data.sex,
            size = data.size,
            description = data.description,
            last_known_location = data.last_known_location,
            petPhotoPath = data.thumbnail,
            state = data.state;

          const pet = new Pet(petID, name, type, breed, sex, size, description, petPhotoPath, last_known_location, pet_owner, state);
          this.pets.push(pet);
        });
      } else {
        // What do when the request fails
        console.log('The request failed!');
      }

      // Code that should run regardless of the request status
      console.log('This always runs...');
    };

    // Create and send a GET request
    // The first argument is the post type (GET, POST, PUT, DELETE, etc.)
    // The second argument is the endpoint URL
    xhr.open('GET', 'http://helpet-api.localhost/wp-json/helpet-api-ext/v1/pets');
    xhr.send();

    return this.pets;
  }
}
