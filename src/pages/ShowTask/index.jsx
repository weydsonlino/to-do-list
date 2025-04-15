import {useParams} from "react-router";
import TasksService from "../../services/Tasks";
import {useEffect, useState} from "react";

export default function ShowTask (){

    const [initialValues, setInitialValues] = useState();
    const { id } = useParams();

        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await TasksService.getTaskById(id);
                    console.log(response);
                    setInitialValues(response.tasks);
                } catch (error) {
                    console.error("Erro ao buscar tasks:", error);
                }
            };
            fetchData();
        }, []);
    return (
        <div>
            {initialValues ? (
                <>
                    <p>{initialValues.title}</p>
                    <p>{initialValues.description}</p>
                    <p>Status: {initialValues.status}</p>
                    <p>Prioridade: {initialValues.priority}</p>
                </>
            ) : (
                <p>Carregando...</p>
            )}
        </div>
    )
}