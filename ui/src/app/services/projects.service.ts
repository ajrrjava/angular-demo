import { Injectable } from '@angular/core';

export interface Project {
    name: string,
    icon: string,
    theme: string,
    description: string,
    technologies: string[],
    url: string,
    github: string,
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  getProjects(): Project[] {

    return [
        {
            name : "Spring Boot Demo",
            icon : "images/spring-boot.png",
            theme: "Planets",
            description : "Spring Boot project that exposes endpoints for CRUD operations. The project uses a model to store planet information in an in-memory database (H2).",
            technologies : ["Spring Boot", "Spring Security", "H2 database"],
            url : "localhost:80",
            github : "https://github.com/ajrrjava/spring-boot-demo",
        },
        {
            name : "GraphQL Demo",
            icon : "images/graphql.png",
            theme: "Planets",
            description : "GraphQL project that can be used with Vertx or Dropwizard (Embedded Jetty) that exposes endpoints for CRUD operations. The project uses a model to store planet information in an in-memory database (H2).",
            technologies : ["GraphQL", "Vertx", "Dropwizard"],
            url : "localhost:80",
            github : "https://github.com/ajrrjava/graphql-demo",
        },
        {
            name : "Apache Kakfa Demo",
            icon : "images/apache-kafka.png",
            theme: "Earthquakes (USGS data)",
            description : "Description is coming soon! Project is available on GitHub",
            technologies : ["Kakfa"],
            url : "localhost:80",
            github : "https://github.com/ajrrjava/kafka-demo",
        },
        {
            name : "Apache Druid Demo",
            icon : "images/apache-druid.svg",
            theme: "Earthquakes (USGS data)",
            description : "Description is coming soon! Project is available on GitHub",
            technologies : ["Apache Druid"],
            url : "localhost:80",
            github : "https://github.com/ajrrjava/druid-demo",
        },
        {
            name : "Angular Demo",
            icon : "images/angular.png",
            theme: "Angular with Clarity",
            description : "Dashboard with projects",
            technologies : ["Angular"],
            url : "http://54.209.101.165/dashboard",
            github : "https://github.com/ajrrjava/angular-demo",
        },
        {
            name : "Angular Demo",
            icon : "images/angular.png",
            theme: "Chicago Public Schools ",
            description : "Simple application that displays Chicago Public Schools in a map based on criteria from the 2021 Progress Report",
            technologies : ["Angular", "RxJs", "OpenStreetMap"],
            url : "http://54.209.101.165/cps",
            github : "https://github.com/ajrrjava/angular-demo",
        },
        {
            name : "React",
            icon : "images/",
            theme: "",
            description : "",
            technologies : ["React"],
            url : "localhost:80",
            github : "",
        },
    ];
  }
}
