document.addEventListener('DOMContentLoaded', () => {
    // Datos iniciales del plan de trabajo
    const initialPlanDeTrabajo = [
        {
            day: 1,
            date: '14 de julio',
            mainTask: 'Revisión y Análisis Profundo del Programa de Estudios',
            actions: [
                { id: 't1_a1', description: 'Revisar los objetivos generales y específicos del curso, enfocándose en la intervención didáctica en educación especial y la narrativa pedagógica.', completed: false },
                { id: 't1_a2', description: 'Analizar el contenido temático de la Unidad I: "La intervención didáctica como proceso de indagación".', completed: false },
                { id: 't1_a3', description: 'Identificar los conocimientos previos necesarios para los participantes, especialmente de "Análisis de práctica y contextos escolares".', completed: false }
            ],
            responsible: 'EPE, CA',
            ganttTask: { name: 'Revisión Programa', startDay: 1, endDay: 1 }
        },
        {
            day: 2,
            date: '15 de julio',
            mainTask: 'Diseño de Estrategias Didácticas Centradas en el Curso',
            actions: [
                { id: 't2_a1', description: 'Seleccionar metodologías de enseñanza-aprendizaje apropiadas, como el aprendizaje basado en preguntas, estudio de casos de intervención didáctica.', completed: false },
                { id: 't2_a2', description: 'Planificar actividades interactivas para cada unidad, incluyendo simulaciones de observación participante y ayudantía.', completed: false },
                { id: 't2_a3', description: 'Definir los recursos didácticos necesarios, con énfasis en instrumentos de investigación cualitativa (entrevistas, registros de observación, diarios, etc.).', completed: false }
            ],
            responsible: 'EPE, DI',
            ganttTask: { name: 'Diseño Estrategias', startDay: 2, endDay: 2 }
        },
        {
            day: 3,
            date: '16 de julio',
            mainTask: 'Elaboración de Materiales Didácticos (Unidad I)',
            actions: [
                { id: 't3_a1', description: 'Iniciar la creación de presentaciones y guías de estudio para la Unidad I, incluyendo conceptos clave de didáctica, intervención didáctica y didáctica en educación especial.', completed: false },
                { id: 't3_a2', description: 'Desarrollar ejercicios prácticos para la aplicación de instrumentos de observación y caracterización del contexto escolar.', completed: false }
            ],
            responsible: 'DI, DC',
            ganttTask: { name: 'Materiales Unidad I', startDay: 3, endDay: 3 }
        },
        {
            day: 4,
            date: '17 de julio',
            mainTask: 'Elaboración de Materiales Didácticos (Unidad II y Narrativa)',
            actions: [
                { id: 't4_a1', description: 'Continuar con la creación de materiales para la Unidad II: "Intervención didáctica y sistematización del trabajo docente".', completed: false },
                { id: 't4_a2', description: 'Desarrollar pautas y ejemplos para la construcción de la narrativa pedagógica.', completed: false },
                { id: 't4_a3', description: 'Seleccionar videos o recursos multimedia de apoyo relevantes para la intervención educativa y la didáctica (ej. video de Negrete).', completed: false }
            ],
            responsible: 'DI, DC',
            ganttTask: { name: 'Materiales Unidad II', startDay: 4, endDay: 4 }
        },
        {
            day: 5,
            date: '18 de julio',
            mainTask: 'Diseño de Instrumentos de Evaluación Específicos',
            actions: [
                { id: 't5_a1', description: 'Crear rúbricas para el escrito reflexivo, la información recabada con instrumentos de observación y la narrativa pedagógica.', completed: false },
                { id: 't5_a2', description: 'Elaborar directrices para la "Propuesta de intervención y planificaciones" y el "Podcast" como evidencia integradora.', completed: false },
                { id: 't5_a3', description: 'Definir criterios de evaluación para la participación activa y reflexiva.', completed: false }
            ],
            responsible: 'EPE, DC',
            ganttTask: { name: 'Diseño Evaluación', startDay: 5, endDay: 5 }
        },
        {
            day: 6,
            date: '19 de julio',
            mainTask: 'Revisión y Ajuste de Materiales y Evaluación',
            actions: [
                { id: 't6_a1', description: 'Revisar los materiales didácticos y los instrumentos de evaluación para asegurar coherencia con los propósitos del curso y claridad para los estudiantes.', completed: false },
                { id: 't6_a2', description: 'Realizar ajustes basados en la retroalimentación inicial y las sugerencias del programa.', completed: false }
            ],
            responsible: 'EPE, CA, DC',
            ganttTask: { name: 'Revisión y Ajuste', startDay: 6, endDay: 6 }
        },
        {
            day: 7,
            date: '20 de julio',
            mainTask: 'Configuración de Plataforma Educativa (LMS) y Carga de Contenido',
            actions: [
                { id: 't7_a1', description: 'Crear la estructura del curso en la plataforma (Moodle, Google Classroom, etc.), incluyendo las dos unidades de aprendizaje.', completed: false },
                { id: 't7_a2', description: 'Subir los materiales didácticos y los instrumentos de evaluación.', completed: false },
                { id: 't7_a3', description: 'Configurar foros de discusión y espacios para la entrega de tareas y narrativas.', completed: false }
            ],
            responsible: 'Especialista en TI/LMS, DI',
            ganttTask: { name: 'Configuración LMS', startDay: 7, endDay: 7 }
        },
        {
            day: 8,
            date: '21 de julio',
            mainTask: 'Programación de Sesiones Sincrónicas y Jornadas de Práctica',
            actions: [
                { id: 't8_a1', description: 'Definir horarios y fechas para las sesiones en vivo, con especial atención a las jornadas de observación participante y ayudantía (semana de prácticas).', completed: false },
                { id: 't8_a2', description: 'Coordinar con los servicios de educación especial para las prácticas (si no se hizo antes).', completed: false }
            ],
            responsible: 'CA, DC',
            ganttTask: { name: 'Programar Sesiones/Prácticas', startDay: 8, endDay: 8 }
        },
        {
            day: 9,
            date: '22 de julio',
            mainTask: 'Preparación de Escenarios para Ejercicios Prácticos',
            actions: [
                { id: 't9_a1', description: 'Desarrollar ejercicios prácticos y casos de estudio que involucren el análisis de contextos escolares y la toma de decisiones en intervención didáctica.', completed: false },
                { id: 't9_a2', description: 'Preparar recursos para la simulación de entrevistas y el uso de diferentes instrumentos de investigación.', completed: false }
            ],
            responsible: 'DC, DI',
            ganttTask: { name: 'Preparar Ejercicios', startDay: 9, endDay: 9 }
        },
        {
            day: 10,
            date: '23 de julio',
            mainTask: 'Prueba Piloto Interna (Materiales, Plataforma y Dinámicas)',
            actions: [
                { id: 't10_a1', description: 'Realizar una simulación interna del curso para identificar posibles fallos técnicos, didácticos o en la comprensión de las actividades.', completed: false },
                { id: 't10_a2', description: 'Evaluar la claridad de las instrucciones, la navegabilidad en la plataforma y la efectividad de las metodologías propuestas.', completed: false }
            ],
            responsible: 'EPE, DI, DC',
            ganttTask: { name: 'Prueba Piloto', startDay: 10, endDay: 10 }
        },
        {
            day: 11,
            date: '24 de julio',
            mainTask: 'Ajustes Finales Basados en Prueba Piloto y Feedback',
            actions: [
                { id: 't11_a1', description: 'Corregir errores identificados durante la prueba piloto y los simulacros de prácticas.', completed: false },
                { id: 't11_a2', description: 'Optimizar la distribución de los materiales en la plataforma y ajustar las actividades según el feedback.', completed: false }
            ],
            responsible: 'DI, DC, Especialista en TI/LMS',
            ganttTask: { name: 'Ajustes Finales', startDay: 11, endDay: 11 }
        },
        {
            day: 12,
            date: '25 de julio',
            mainTask: 'Preparación del Ambiente de Aprendizaje y Recursos Tecnológicos',
            actions: [
                { id: 't12_a1', description: 'Asegurar que todos los recursos tecnológicos (plataforma LMS, herramientas de comunicación, acceso a internet) estén operativos.', completed: false },
                { id: 't12_a2', description: 'Verificar la disponibilidad de espacios físicos y equipos (si aplica para sesiones presenciales/híbridas).', completed: false }
            ],
            responsible: 'Responsable de Logística/TI',
            ganttTask: { name: 'Prepara Ambiente', startDay: 12, endDay: 12 }
        },
        {
            day: 13,
            date: '26 de julio',
            mainTask: 'Sesión de Coordinación Final del Equipo',
            actions: [
                { id: 't13_a1', description: 'Reunión con todo el equipo para revisar el plan final, discutir las expectativas y resolver dudas.', completed: false },
                { id: 't13_a2', description: 'Asignar roles específicos para el inicio y desarrollo del curso.', completed: false }
            ],
            responsible: 'EPE, CA, DC, DI, Especialista en TI/LMS',
            ganttTask: { name: 'Coordinación Final', startDay: 13, endDay: 13 }
        },
        {
            day: 14,
            date: '27 de julio',
            mainTask: 'Comunicación y Orientación a Participantes (Pre-curso)',
            actions: [
                { id: 't14_a1', description: 'Enviar información de bienvenida y acceso a la plataforma a los participantes (si no se hizo antes).', completed: false },
                { id: 't14_a2', description: 'Proporcionar instrucciones iniciales claras sobre el acceso a materiales, la dinámica del seminario-taller y la importancia de la narrativa pedagógica.', completed: false }
            ],
            responsible: 'CA, DC',
            ganttTask: { name: 'Comunicar Participantes', startDay: 14, endDay: 14 }
        },
        {
            day: 15,
            date: '28 de julio',
            mainTask: 'Revisión Final y Preparación para el Inicio del Curso',
            actions: [
                { id: 't15_a1', description: 'Última revisión de todos los materiales, configuraciones y logística.', completed: false },
                { id: 't15_a2', description: 'Asegurar que el docente esté completamente preparado y familiarizado con el contenido y las dinámicas para el primer día de clase.', completed: false }
            ],
            responsible: 'EPE, CA, DC',
            ganttTask: { name: 'Revisión Pre-Inicio', startDay: 15, endDay: 15 }
        }
    ];

    // Variable para almacenar el estado del plan (equivalente a useState en React)
    let planDeTrabajo = [];

    // Referencias a elementos del DOM
    const dailyCardsContainer = document.getElementById('daily-cards-container');
    const overallProgressFill = document.getElementById('overall-progress-fill');
    const overallProgressPercentage = document.getElementById('overall-progress-percentage');
    const ganttChartGrid = document.getElementById('gantt-chart');
    const ganttHeader = ganttChartGrid.querySelector('.gantt-header');
    const ganttBody = document.getElementById('gantt-body');

    // Función para cargar el progreso desde localStorage
    function loadProgress() {
        const savedProgress = localStorage.getItem('coursePlanProgress');
        if (savedProgress) {
            try {
                const parsedProgress = JSON.parse(savedProgress);
                // Fusionar el estado guardado con la estructura inicial
                planDeTrabajo = initialPlanDeTrabajo.map(day => ({
                    ...day,
                    actions: day.actions.map(action => {
                        const savedAction = parsedProgress.find(sa => sa.id === action.id);
                        return savedAction ? { ...action, completed: savedAction.completed } : action;
                    })
                }));
            } catch (e) {
                console.error("Error al analizar el plan guardado de localStorage:", e);
                planDeTrabajo = initialPlanDeTrabajo;
            }
        } else {
            planDeTrabajo = initialPlanDeTrabajo;
        }
    }

    // Función para guardar el progreso en localStorage
    function saveProgress() {
        const currentProgress = planDeTrabajo.flatMap(day => day.actions.map(action => ({
            id: action.id,
            completed: action.completed
        })));
        localStorage.setItem('coursePlanProgress', JSON.stringify(currentProgress));
    }

    // Función para renderizar las tarjetas diarias
    function renderDailyCards() {
        dailyCardsContainer.innerHTML = ''; // Limpiar el contenedor
        planDeTrabajo.forEach((dayData, dayIndex) => {
            const card = document.createElement('div');
            card.className = 'task-card';
            card.dataset.dayIndex = dayIndex; // Usar dayIndex para referencia

            const allActionsCompleted = dayData.actions.every(action => action.completed);
            if (allActionsCompleted) {
                card.classList.add('completed-day');
            }

            let taskListHtml = '';
            dayData.actions.forEach(action => {
                taskListHtml += `
                    <li class="task-item ${action.completed ? 'completed' : ''}">
                        <input type="checkbox" id="action-${action.id}" data-action-id="${action.id}" data-day-index="${dayIndex}" ${action.completed ? 'checked' : ''}>
                        <label for="action-${action.id}" class="task-description">${action.description}</label>
                    </li>
                `;
            });

            card.innerHTML = `
                <h3>Día ${dayData.day}: ${dayData.date}</h3>
                <h4>${dayData.mainTask}</h4>
                <p><strong>Responsable(s):</strong> ${dayData.responsible}</p>
                <ul class="task-list">
                    ${taskListHtml}
                </ul>
            `;
            dailyCardsContainer.appendChild(card);
        });

        // Añadir listeners a los checkboxes después de renderizar
        dailyCardsContainer.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', (event) => {
                const actionId = event.target.dataset.actionId;
                const dayIndex = parseInt(event.target.dataset.dayIndex);
                const isChecked = event.target.checked;

                // Actualizar el estado en el array planDeTrabajo
                const day = planDeTrabajo[dayIndex];
                const action = day.actions.find(a => a.id === actionId);
                if (action) {
                    action.completed = isChecked;
                }

                // Actualizar la clase visual del item
                const taskItem = event.target.closest('.task-item');
                if (isChecked) {
                    taskItem.classList.add('completed');
                } else {
                    taskItem.classList.remove('completed');
                }

                // Actualizar la clase visual de la tarjeta del día
                const dayCard = event.target.closest('.task-card');
                const allTasksInDayCompleted = Array.from(dayCard.querySelectorAll('input[type="checkbox"]')).every(cb => cb.checked);
                if (allTasksInDayCompleted) {
                    dayCard.classList.add('completed-day');
                } else {
                    dayCard.classList.remove('completed-day');
                }

                updateOverallProgress();
                renderGanttChart(); // Re-renderizar el Gantt para actualizar el progreso de las barras
                saveProgress(); // Guardar el estado en localStorage
            });
        });
    }

    // Función para actualizar el progreso general
    function updateOverallProgress() {
        let totalActions = 0;
        let completedActions = 0;

        planDeTrabajo.forEach(day => {
            totalActions += day.actions.length;
            day.actions.forEach(action => {
                if (action.completed) {
                    completedActions++;
                }
            });
        });

        const progress = totalActions > 0 ? (completedActions / totalActions) * 100 : 0;
        overallProgressFill.style.width = `${progress.toFixed(0)}%`;
        overallProgressPercentage.textContent = `${progress.toFixed(0)}%`;
    }

    // Función para renderizar el diagrama de Gantt simple
    function renderGanttChart() {
        ganttBody.innerHTML = ''; // Limpiar el cuerpo del Gantt

        const totalDays = 15; // Días totales en el Gantt
        const startDate = new Date('2025-07-14'); // Fecha de inicio para el display

        // Configurar las columnas del grid para el Gantt (si no están ya configuradas)
        // La primera columna es para el nombre de la tarea, las siguientes para los días
        ganttChartGrid.style.gridTemplateColumns = `200px repeat(${totalDays}, minmax(50px, 1fr))`;

        // Crear los encabezados de fecha si no existen
        if (ganttHeader.children.length === 1) { // Solo si 'Tarea' es el único hijo
            for (let i = 0; i < totalDays; i++) {
                const currentDate = new Date(startDate);
                currentDate.setDate(startDate.getDate() + i);
                const dayDiv = document.createElement('div');
                dayDiv.className = 'bg-white p-2 text-center font-bold border-b border-r border-gray-200';
                dayDiv.textContent = `${currentDate.getDate()}/${currentDate.getMonth() + 1}`; // Día/Mes
                ganttHeader.appendChild(dayDiv);
            }
        }

        planDeTrabajo.forEach((dayData) => {
            const ganttTask = dayData.ganttTask;
            if (!ganttTask) return;

            const row = document.createElement('div');
            row.className = 'gantt-row';

            const taskNameCell = document.createElement('div');
            taskNameCell.className = 'bg-white p-2 text-left border-r border-b border-gray-200 sticky left-0 z-5';
            taskNameCell.textContent = ganttTask.name;
            row.appendChild(taskNameCell);

            // Calcular el progreso de la tarea del Gantt (basado en las acciones del día)
            const relevantActions = dayData.actions || [];
            const completedSubActions = relevantActions.filter(a => a.completed).length;
            const totalSubActions = relevantActions.length;
            const taskProgress = totalSubActions > 0 ? (completedSubActions / totalSubActions) * 100 : 0;

            for (let i = 1; i <= totalDays; i++) { // Iterar por cada día en el Gantt
                const cell = document.createElement('div');
                cell.className = 'gantt-bar-cell'; // Clase para la celda que contiene la barra

                if (i >= ganttTask.startDay && i <= ganttTask.endDay) {
                    const bar = document.createElement('div');
                    bar.className = 'gantt-bar';

                    if (taskProgress === 100) {
                        bar.classList.add('completed');
                    } else if (taskProgress > 0) {
                        bar.classList.add('in-progress');
                    } else {
                        bar.classList.add('not-started');
                    }
                    
                    // Ajustar el ancho de la barra para simular el progreso
                    // Nota: En este Gantt simple, la barra ocupa toda la celda si la tarea está en ese día.
                    // El "progreso" se refleja en el color. Si quisieras una barra que se "rellena",
                    // la celda debería tener un ancho fijo y la barra un ancho porcentual.
                    // Aquí, el width del div 'gantt-bar' ya es 100% de su celda, el color indica el progreso.
                    // Para una barra que se "llena", se podría hacer:
                    // bar.style.width = `${taskProgress}%`;
                    // Y la celda debería tener un ancho fijo para que esto sea visible.
                    // Por simplicidad y consistencia visual con el React, solo el color cambia.
                    
                    bar.title = `${ganttTask.name}: ${taskProgress.toFixed(0)}% completado`;
                    cell.appendChild(bar);
                }
                row.appendChild(cell);
            }
            ganttBody.appendChild(row);
        });
    }

    // Inicializar la aplicación
    loadProgress();
    renderDailyCards();
    updateOverallProgress();
    renderGanttChart();
});
