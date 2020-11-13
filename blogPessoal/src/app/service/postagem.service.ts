import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Autorization', localStorage.getItem('token'))
  }

  // End points
  getAllPostagens() {
    return this.http.get('http://localhost:8080/postagens', this.token)
  }
      // End points            //Parâmetro
  getByIdPostagem(id: number) {
    return this.http.get(`http://localhost:8080/postagens/${id}`, this.token)
  }
   // End points   //(Parâmetro)
  postPostagem(postagem: Postagem) {
    return this.http.post('http://localhost:8080/postagens', postagem, this.token)
  }
  // End points //(Parâmetro)
  putPostagem(postagem: Postagem) {
    return this.http.put('http://localhost:8080/postagens', postagem, this.token)
  }
  // End points //(Parâmetro)v
  deletePostagem(id: number) {
    return this.http.delete(`http://localhost:8080/postagens/${id}`, this.token)
  }

  // End points          //(Parâmetro)
  getByTituloPostagem (titulo: string){
    return this.http.get(`http://localhost:8080/postagens/titulo/${titulo}`, this.token)
  }
}
