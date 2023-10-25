{
  /*Fazendo alguns importes necessarios*/
}
import React from "react";
import { MDBListGroup, MDBListGroupItem } from "mdb-react-ui-kit";

{
  /*Inicio do Componente*/
}
export default function App() {
  return (
    <section>
      {/*Inicio da section*/}
      <h6 className="bg-light p-2 border-top border-bottom">
        Depoimento Dos Alunos
      </h6>
      {/*Inicio da Lista dos alunos */}
      <MDBListGroup light className="mb-4">
        {/*Intem da lista*/}
        <MDBListGroupItem className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img
              src="https://mdbootstrap.com/img/new/avatars/8.jpg"
              alt=""
              style={{ width: "45px", height: "45px" }}
              className="rounded-circle"
            />
            <div className="ms-3">
              <p className="fw-bold mb-1">João Silva</p>
              <p className="text-muted mb-0">
                Metodologia incrivel me empreguei em 6 meses.
              </p>
            </div>
          </div>
        </MDBListGroupItem>
        {/*Intem da lista*/}
        <MDBListGroupItem className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img
              src="https://mdbootstrap.com/img/new/avatars/6.jpg"
              alt=""
              style={{ width: "45px", height: "45px" }}
              className="rounded-circle"
            />
            <div className="ms-3">
              <p className="fw-bold mb-1">Alexandra Melo</p>
              <p className="text-muted mb-0">
                As video aulas são gravadas é você pode tirar dúvidas ao vivo.
              </p>
            </div>
          </div>
        </MDBListGroupItem>
        {/*Intem da lista*/}
        <MDBListGroupItem className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img
              src="https://mdbootstrap.com/img/new/avatars/7.jpg"
              alt=""
              style={{ width: "45px", height: "45px" }}
              className="rounded-circle"
            />
            <div className="ms-3">
              <p className="fw-bold mb-1">Katarine Holfman</p>
              <p className="text-muted mb-0">
                Os professores são incriveis muito ateciosos mandam os materiais
                atualizados do dia no fim das aulas.
              </p>
            </div>
          </div>
        </MDBListGroupItem>
      </MDBListGroup>

      <h6 className="bg-light p-2 border-top border-bottom">
        Depoimento de Empregadores
      </h6>
      {/*Inicio da listagem de empregadores*/}
      <MDBListGroup light className="mb-4">
        {/*Intem da lista*/}
        <MDBListGroupItem className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img
              src="https://mdbootstrap.com/img/new/avatars/9.jpg"
              alt=""
              style={{ width: "45px", height: "45px" }}
              className="rounded-circle"
            />
            <div className="ms-3">
              <p className="fw-bold mb-1">Soraya Cristina</p>
              <p className="text-muted mb-0">
                Minha equipe de desenvolvimento se surpredeu com o nível de
                conhecimento dos alunos.
              </p>
            </div>
          </div>
        </MDBListGroupItem>
        {/*Intem da lista*/}
        <MDBListGroupItem className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img
              src="https://mdbootstrap.com/img/new/avatars/11.jpg"
              alt=""
              style={{ width: "45px", height: "45px" }}
              className="rounded-circle"
            />
            <div className="ms-3">
              <p className="fw-bold mb-1">Analia Dualibe</p>
              <p className="text-muted mb-0">
                Nossa empresa teve um ganho de produtividade excelente
                contratando os profissionais desta escola.{" "}
              </p>
            </div>
          </div>
        </MDBListGroupItem>
        {/*Intem da lista*/}
        <MDBListGroupItem className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img
              src="https://mdbootstrap.com/img/new/avatars/15.jpg"
              alt=""
              style={{ width: "45px", height: "45px" }}
              className="rounded-circle"
            />
            <div className="ms-3">
              <p className="fw-bold mb-1">Leticia Fresh</p>
              <p className="text-muted mb-0">
                Abrimos um programa de estágio para os alunos desta escola é
                acabamos de emprega 100% dos participantes do programa.
              </p>
            </div>
          </div>
        </MDBListGroupItem>
      </MDBListGroup>
    </section>
  );
}
