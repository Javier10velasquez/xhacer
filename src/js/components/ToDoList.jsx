import React, { useState } from "react";

const ToDoList = () => {
  const [tarea, setTarea] = useState("");
  const [listaDeTareas, setListaDeTareas] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const grabarTarea = () => {
    if (tarea.trim() === "") return alert("Pon tu tarea");

    setListaDeTareas([...listaDeTareas, tarea]);
    setTarea("");
  };

  const eliminarTarea = (indexAEliminar) => {
    setListaDeTareas(listaDeTareas.filter((_, i) => i !== indexAEliminar));
  };

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="text-center w-100" style={{ maxWidth: "500px" }}>
        <h1 className="mb-4">Mi lista de tareas</h1>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Escribe una tarea"
          onChange={(e) => setTarea(e.target.value)}
          value={tarea}
          onKeyDown={(e) => e.key === "Enter" && grabarTarea()}
        />

        <div>
          {listaDeTareas.length === 0 ? (
            <p className="text-muted">No hay tareas, añadir tareas</p>
          ) : (
            listaDeTareas.map((item, index) => (
              <div
                key={index}
                className="d-flex justify-content-between align-items-center border-bottom py-2"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <span className="text-start">{item}</span>
                {hoveredIndex === index && (
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => eliminarTarea(index)}
                  >
                    X
                  </button>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ToDoList;

