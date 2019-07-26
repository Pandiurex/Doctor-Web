import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  members = [
    {
      id: 1,
      nombres:  'Cristopher Sinhue',
      apellidos: 'Estrada Panduro',
      carrera: 'Ingenieria en Computacion',
      colaboracion: 'Frontend Developer',
      url: 'https://scontent.fgdl5-1.fna.fbcdn.net/v/t1.0-9/29684080_10208748268782587_4008337989166956544_n.jpg?_nc_cat=105&_nc_oc=AQmvLu8ZhMhRJVoFvcoVMAU37We74u1yPnP9Rwjk3mfkjxz43BLc2mn27EDv5jYQWHk&_nc_ht=scontent.fgdl5-1.fna&oh=a81150f4d5887ec1939a8948e74ac5ef&oe=5DA6C26E'

    },
    {
      id: 2,
      nombres:  'Fernando Martin',
      apellidos: 'Jaime Ramirez',
      carrera: 'Ingenieria en Informatica',
      colaboracion: 'Backend Developer',
      url: 'https://scontent.fgdl5-1.fna.fbcdn.net/v/t1.0-9/13566965_1222754524433834_6220384183514716556_n.jpg?_nc_cat=106&_nc_oc=AQl7t_fFjriOQSl-bmcvkZ-zVu8bBglaNMOW_ofFKG9lC4Po42neMVq2rKq_wOJYbb4&_nc_ht=scontent.fgdl5-1.fna&oh=6481ba270c6365dacd0f319b8a4ec60f&oe=5DB0FFCF'
    },
    {
      id: 3,
      nombres:  'Joel',
      apellidos: 'Gonzalez Lara',
      carrera: 'Ingenieria en Informatica',
      colaboracion: 'Backend Developer',
      url: 'https://scontent.fgdl5-1.fna.fbcdn.net/v/t1.0-9/49422716_2309546336036376_7574713381035180032_n.jpg?_nc_cat=103&_nc_oc=AQn8anM-uXycoomTCY9iJTJFtXpU4WGCxyOydtBVk7AdXh-Fy9O6VLQGvHs4nzsB__0&_nc_ht=scontent.fgdl5-1.fna&oh=04e44a3fb5126800f100d7f895aeb5ba&oe=5DEE58FD'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
