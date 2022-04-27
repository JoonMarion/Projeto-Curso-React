import { useNavigate } from 'react-router-dom';
import React from 'react';
import ProjectForm from '../project/ProjectForm';
import styles from '../pages_styledcomponents/NewProject.module.css';

export function NewProject() {
    const navigate = useNavigate();

    function createPost(project) {
        // initialize cost and services
        project.cost = 0;
        project.services = [];

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data);
                // redirect
                // @ts-ignore
                navigate('/projects', { state: { message: 'Projeto criado com sucesso!' } });
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois aidicionar os serviços</p>
            <ProjectForm
                // @ts-ignore
                handleSubmit={createPost}
                // @ts-ignore
                btnText="Criar Projeto"
                projectData={undefined}
            />
        </div>
    );
}

export default NewProject;
