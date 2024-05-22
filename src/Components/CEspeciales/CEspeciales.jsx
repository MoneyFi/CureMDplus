import React from 'react'

const CEspeciales = () => {
    return (
        <div className='text-sm font-roboto flex flex-col gap-1'>
            <h1 className='text-primary-blue text-xl font-sans font-bold'>CONDICIONES ESPECÍFICAS BENEFICIO
                EN CASO DE DIAGNÓSTICO DE
                ENFERMEDADES GRAVES</h1>
            <div>
                <h2 className='text-primary-blue text-base font-varela'>ALTERNATIVA A: SIN PERÍODO DE SUPERVIVENCIA</h2>
                <h3 className='font-bold font-sans text-[#505050]'>Artículo 1º - Riesgo Cubierto</h3>
                <p>La cobertura se activa cuando el asegurado es internado en un establecimiento asistencial o en su domicilio particular debido a un accidente, siempre que no haya alcanzado la edad máxima establecida en las condiciones particulares.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 2º - Definición de las Enfermedades Cubiertas</h3>
                <b>Cáncer</b>
                <p>Crecimiento descontrolado de células malignas diagnosticado por un profesional. Incluye Leucemia (excepto leucemia linfática crónica), Linfomas y Enfermedad de Hodgkin.</p>

                <b>Infarto de Miocardio</b>
                <p>Muerte de una porción del músculo cardíaco por obstrucciones en las arterias coronarias.</p>

                <b>Accidente Cerebro Vascular</b>
                <p>Incidente cerebro-vascular por riego sanguíneo inadecuado. Debe causar daño neurológico permanente, confirmado por un neurólogo y mantenido por más de 4 semanas.</p>

                <b>Insuficiencia Renal Crónica</b>
                <p>Fallo total e irreversible de ambos riñones, requiriendo diálisis permanente. Diagnóstico confirmado por informe anatomopatológico.</p>

                <b>Operación de "By-Pass"</b>
                <p>Cirugía para tratar estenosis u oclusión en las arterias coronarias, indicada por un especialista y justificada por angiografía. Requiere ecocardiograma post-bypass.</p>

                <b>Parálisis</b>
                <p>Incluye cuadriplejia (parálisis de ambos brazos y piernas) y paraplejia (parálisis de ambas piernas y mitad inferior del cuerpo). Diagnóstico por especialista, con parálisis continua y permanente por 12 meses.</p>

                <b>Distrofia Muscular</b>
                <p>Miopatías hereditarias con atrofia y debilidad muscular progresiva. Incluye varios tipos como Duchenne y Becker. Diagnóstico confirmado por especialista.</p>

                <b>Esclerosis Múltiple</b>
                <p>Destrucción de las vainas de mielina en cerebro, nervios ópticos o médula espinal. Diagnóstico por especialista en neurología.</p>

                <b>Quemaduras Graves</b>
                <p>Quemaduras de segundo y tercer grado cubriendo más del 30% de la superficie corporal. Requiere informe de especialista.</p>

                <b>Post-quirúrgico Complicado</b>
                <p>Complicaciones después de cirugía, incluyendo 40 días de internación o 20 días en UTI, 3 actos quirúrgicos y 15 días en UTI, hiperalimentación parenteral por 5 días, o 30 días de internación con fallas multiorgánicas.</p>

                <b>Gran Trauma</b>
                <p>Politraumatismos de un accidente con posible compromiso de órganos internos y funciones vitales. Requiere 30 días de internación con 15 días en UTI, 3 actos quirúrgicos y 15 días en UTI, o 30 días de internación con fallas multiorgánicas.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 3º - Periodo de carencia</h3>
                <p>Se establece un período de carencia de 60 días desde el inicio de la cobertura, con pago de primas, excepto para la Insuficiencia Renal Crónica, que tiene un plazo de 90 días. No se otorgarán beneficios si el diagnóstico de la enfermedad ocurre durante este período, salvo que sea consecuencia de un accidente ocurrido después del inicio de la cobertura.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 4º - Beneficio</h3>
                <p>La Compañía pagará el Capital Asegurado por cada enfermedad cubierta, tras la confirmación del diagnóstico por su auditoría médica. El pago se realiza una sola vez por la misma enfermedad, aunque se manifieste nuevamente. Si un mismo evento afecta múltiples coberturas, solo se pagará el capital más alto. La indemnización se pondrá a disposición del asegurado dentro de los 15 días de presentar la documentación necesaria. Este beneficio es adicional e independiente de otros beneficios de la póliza.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 5º - Requisitos para la validez del diagnostico</h3>
                <p>La Compañía debe recibir, dentro de los 30 días del diagnóstico, un informe escrito de un especialista con documentación respaldatoria (estudios clínicos, radiológicos, histológicos o de laboratorio). La omisión o demora en esta comunicación puede resultar en la pérdida del derecho a recibir el beneficio, salvo en casos de fuerza mayor o imposibilidad sin culpa o negligencia.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 6º - Exclusiones Especificas</h3>
                <p>Cáncer:
                    <br />
                    <ol className='list-decimal ml-4'>
                        <li>Tumores benignos.</li>
                        <li>
                            Estadios precoces de tumores malignos con curación total y bajo costo de tratamiento, incluyendo:
                        </li>
                        <ul>
                            <li>
                                Etapa A del cáncer de colon según Dukes.
                            </li>
                            <li>
                                Etapa A del cáncer de próstata clasificado como T1 en TNM.
                            </li>
                            <li>
                                Tumores con cambios malignos in situ y lesiones premalignas.
                            </li>
                            <li>
                                Carcinoma in situ no invasivo.
                            </li>
                            <li>
                                Melanomas con espesor menor a 1.5 mm o invasión menor de Clark 3.
                            </li>
                        </ul>
                        <li>
                            Cáncer de piel, excepto melanoma maligno invasor de la dermis.
                        </li>
                    </ol>
                    <br />
                    Infarto de Miocardio:
                    <br />
                    <ol className='list-decimal ml-4'>
                        <li>
                            Infartos silenciosos y/o que no requieren tratamiento en UCI.
                        </li>
                        <li>
                            Angina de pecho estable o inestable.
                        </li>
                    </ol>
                    <br />
                    Accidente Cerebro Vascular:
                    <br />
                    <ol className='list-decimal ml-4'>
                        <li>
                            Accidentes cerebrovasculares transitorios.
                        </li>
                        <li>
                            Lesiones cerebrales causadas por traumatismo, hipoxia o reducción crültiva de oxígeno.
                        </li>
                    </ol>
                    <br />
                    Post-quirúrgico Complicado:
                    <br />
                    <ol className='list-decimal ml-4'>
                        <li>
                            Post-quirúrgicos complicados por intervenciones originadas en traumatismo o accidente.
                        </li>
                        <li>
                            Intervenciones realizadas a recién nacidos en los primeros 6 meses de vida.
                        </li>
                        <li>
                            Post-quirúrgicos consecuencia de enfermedad preexistente.
                        </li>
                        <li>
                            Post-quirúrgicos en pacientes con diabetes tipo I o II (solo insulino-dependientes).
                        </li>
                        <li>
                            Quemaduras Graves o Gran Trauma, según definiciones de la póliza.
                        </li>
                        <li>
                            Afecciones por consumo abusivo de alcohol.
                        </li>
                    </ol>
                    <br />
                    Operación de "By-Pass":
                    <br />
                    <ol className='list-decimal ml-4'>
                        <li>
                            Angioplastias.
                        </li>
                        <li>
                            Tratamientos por láser y otras técnicas sin apertura del tórax.
                        </li>
                        <li>
                            Operaciones de válvulas, tumoraciones intracardíacas o alteraciones congénitas que no sean específicamente un by-pass coronario.
                        </li>
                    </ol>
                </p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 7º - Terminación de la cobertura</h3>
                <p>La cobertura de cada enfermedad termina al diagnosticarse y pagarse el beneficio previsto, sin vigencia en futuras renovaciones, si las hubiere.</p>

                <br />

                <h2 className='text-primary-blue text-base font-varela'>ALTERNATIVA B: CON PERÍODO DE SUPERVIVENCIA</h2>
                <h3 className='font-bold font-sans text-[#505050]'>Artículo 1º - Riesgo Cubierto</h3>
                <p>La cobertura se activa cuando el asegurado es internado en un establecimiento asistencial o en su domicilio particular debido a un accidente, siempre que no haya alcanzado la edad máxima establecida en las condiciones particulares.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 2º - Definición de las Enfermedades Cubiertas</h3>
                <b>Cáncer</b>
                <p>Crecimiento descontrolado de células malignas diagnosticado por un profesional. Incluye Leucemia (excepto leucemia linfática crónica), Linfomas y Enfermedad de Hodgkin.</p>

                <b>Infarto de Miocardio</b>
                <p>Muerte de una porción del músculo cardíaco por obstrucciones en las arterias coronarias.</p>

                <b>Accidente Cerebro Vascular</b>
                <p>Incidente cerebro-vascular por riego sanguíneo inadecuado. Debe causar daño neurológico permanente, confirmado por un neurólogo y mantenido por más de 4 semanas.</p>

                <b>Insuficiencia Renal Crónica</b>
                <p>Fallo total e irreversible de ambos riñones, requiriendo diálisis permanente. Diagnóstico confirmado por informe anatomopatológico.</p>

                <b>Operación de "By-Pass"</b>
                <p>Cirugía para tratar estenosis u oclusión en las arterias coronarias, indicada por un especialista y justificada por angiografía. Requiere ecocardiograma post-bypass.</p>

                <b>Parálisis</b>
                <p>Incluye cuadriplejia (parálisis de ambos brazos y piernas) y paraplejia (parálisis de ambas piernas y mitad inferior del cuerpo). Diagnóstico por especialista, con parálisis continua y permanente por 12 meses.</p>

                <b>Distrofia Muscular</b>
                <p>Miopatías hereditarias con atrofia y debilidad muscular progresiva. Incluye varios tipos como Duchenne y Becker. Diagnóstico confirmado por especialista.</p>

                <b>Esclerosis Múltiple</b>
                <p>Destrucción de las vainas de mielina en cerebro, nervios ópticos o médula espinal. Diagnóstico por especialista en neurología.</p>

                <b>Post-quirúrgico Complicado</b>
                <p>Complicaciones después de cirugía, incluyendo 40 días de internación o 20 días en UTI, 3 actos quirúrgicos y 15 días en UTI, hiperalimentación parenteral por 5 días, o 30 días de internación con fallas multiorgánicas.</p>

                <b>Gran Trauma</b>
                <p>Politraumatismos de un accidente con posible compromiso de órganos internos y funciones vitales. Requiere 30 días de internación con 15 días en UTI, 3 actos quirúrgicos y 15 días en UTI, o 30 días de internación con fallas multiorgánicas.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 3º - Periodo de carencia</h3>
                <p>Se establece un período de carencia de 60 días desde el inicio de la cobertura, durante el cual no se otorgarán beneficios si el diagnóstico de la enfermedad ocurre. Para la Insuficiencia Renal Crónica, el período de carencia es de 90 días. Este período no se aplica si la enfermedad es consecuencia de un accidente ocurrido después del inicio de la cobertura.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 4º - Beneficio</h3>
                <p>La Compañía pagará el Capital Asegurado tras la confirmación del diagnóstico de una enfermedad cubierta. El pago se realiza una sola vez por la misma enfermedad, incluso si reaparece. Si un mismo evento afecta múltiples coberturas, solo se pagará el capital más alto. La indemnización se pondrá a disposición del asegurado dentro de los 15 días de presentar la documentación necesaria. Este beneficio es adicional e independiente de otros beneficios de la póliza.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 5º - Requisitos para la validez del diagnostico</h3>
                <p>Dentro de los 30 días del diagnóstico, la Compañía debe recibir un informe escrito de un especialista con documentación respaldatoria (estudios clínicos, radiológicos, histológicos o de laboratorio). La falta o demora en esta comunicación puede resultar en la pérdida del derecho a recibir el beneficio, salvo en casos de fuerza mayor o imposibilidad sin culpa o negligencia.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 6º - Exclusiones Especificas</h3>
                <p>Cáncer:
                    <br />
                    <ol className='list-decimal ml-4'>
                        <li>Tumores benignos.</li>
                        <li>
                            Estadios precoces de tumores malignos con curación total y bajo costo de tratamiento, incluyendo:
                        </li>
                        <ul>
                            <li>
                                Etapa A del cáncer de colon según Dukes.
                            </li>
                            <li>
                                Etapa A del cáncer de próstata clasificado como T1 en TNM.
                            </li>
                            <li>
                                Tumores con cambios malignos in situ y lesiones premalignas.
                            </li>
                            <li>
                                Carcinoma in situ no invasivo.
                            </li>
                            <li>
                                Melanomas con espesor menor a 1.5 mm o invasión menor de Clark 3.
                            </li>
                        </ul>
                        <li>
                            Cáncer de piel, excepto melanoma maligno invasor de la dermis.
                        </li>
                    </ol>
                    <br />
                    Infarto de Miocardio:
                    <br />
                    <ol className='list-decimal ml-4'>
                        <li>
                            Infartos silenciosos y/o que no requieren tratamiento en UCI.
                        </li>
                        <li>
                            Angina de pecho estable o inestable.
                        </li>
                    </ol>
                    <br />
                    Accidente Cerebro Vascular:
                    <br />
                    <ol className='list-decimal ml-4'>
                        <li>
                            Accidentes cerebrovasculares transitorios.
                        </li>
                        <li>
                            Lesiones cerebrales causadas por traumatismo, hipoxia o reducción crültiva de oxígeno.
                        </li>
                    </ol>
                    <br />
                    Post-quirúrgico Complicado:
                    <br />
                    <ol className='list-decimal ml-4'>
                        <li>
                            Post-quirúrgicos complicados por intervenciones originadas en traumatismo o accidente.
                        </li>
                        <li>
                            Intervenciones realizadas a recién nacidos en los primeros 6 meses de vida.
                        </li>
                        <li>
                            Post-quirúrgicos consecuencia de enfermedad preexistente.
                        </li>
                        <li>
                            Post-quirúrgicos en pacientes con diabetes tipo I o II (solo insulino-dependientes).
                        </li>
                        <li>
                            Quemaduras Graves o Gran Trauma, según definiciones de la póliza.
                        </li>
                        <li>
                            Afecciones por consumo abusivo de alcohol.
                        </li>
                    </ol>
                    <br />
                    Operación de "By-Pass":
                    <br />
                    <ol className='list-decimal ml-4'>
                        <li>
                            Angioplastias.
                        </li>
                        <li>
                            Tratamientos por láser y otras técnicas sin apertura del tórax.
                        </li>
                        <li>
                            Operaciones de válvulas, tumoraciones intracardíacas o alteraciones congénitas que no sean específicamente un by-pass coronario.
                        </li>
                    </ol>
                </p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 7º - Terminación de la cobertura</h3>
                <p>La cobertura de cada enfermedad termina al diagnosticarse y pagarse el beneficio previsto, sin vigencia en futuras renovaciones, si las hubiere.</p>
            </div>
            <h1 className='text-primary-blue text-xl font-sans font-bold'>CONDICIONES ESPECÍFICAS COBERTURA DE INTERVENCIONES QUIRÚRGICAS</h1>
            <div>
                <h3 className='font-bold font-sans text-[#505050]'>Artículo 1º - Riesgo Cubierto</h3>
                <p>La Compañía pagará un beneficio cuando el Asegurado se someta a alguna de las intervenciones quirúrgicas incluidas en el Listado de Beneficios Previstos para Intervenciones Quirúrgicas, que es parte de las Condiciones Particulares.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 2º - Período de Carencia</h3>
                <p>Se establece un período de carencia de 90 días desde el inicio de la cobertura para todas las intervenciones en el listado, con excepciones específicas:
                    <ul className='list-disc ml-4'>
                        <li>
                            Para ciertas operaciones cardiacas, angioplastías y algunas intervenciones de cardiología, el período de carencia es de 300 días.
                        </li>
                        <li>
                            Para parto y cesárea clásica, el período de carencia es de 300 días.

                        </li>
                        <li>
                            Para evacuación uterina en el segundo trimestre de embarazo, el período de carencia es de 150 días.
                        </li>
                        <li>
                            Los plazos de carencia no aplican si la intervención es consecuencia de un accidente ocurrido después del inicio de la cobertura.
                        </li>
                    </ul>
                </p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 3º - Beneficio</h3>
                <p>La Compañía abonará el Capital Asegurado una vez verificada la intervención quirúrgica por su auditoría médica. En caso de intervenciones fuera de Argentina, se aplicará un coeficiente específico. Los beneficios pueden usarse múltiples veces por diferentes enfermedades o accidentes durante el año, salvo que se establezca un límite máximo anual. Si se realizan múltiples operaciones en una intervención, se pagará el 100% de la operación de mayor valor y el 50% del segundo mayor monto. Las intervenciones repetidas por secuelas o programación se consideran como una sola, y se pagará el mayor capital asegurado. La indemnización se pondrá a disposición dentro de los 15 días de presentar la documentación necesaria.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 4º - Requisitos para la Validez del Diagnóstico</h3>
                <p>La Compañía debe recibir un informe escrito de un especialista dentro de los 30 días de la intervención, con el diagnóstico y tratamiento realizado, y documentación respaldatoria. La falta o demora en la comunicación puede resultar en la pérdida del derecho al beneficio, salvo en casos de fuerza mayor o imposibilidad sin culpa o negligencia.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 5º - Exclusiones Específicas</h3>
                <p>No se indemnizarán intervenciones no detalladas en el Listado de Beneficios Previstos. Además, quedan excluidas:
                    <ul className='list-disc ml-4'>
                        <li>
                            Cirugías cosméticas y/o plásticas, excepto si tienen una finalidad reparadora.
                        </li>
                        <li>
                            Tratamientos por obesidad y/o rejuvenecimiento.
                        </li>
                        <li>
                            Intervenciones ilícitas, experimentales o realizadas por personal no habilitado legalmente.
                        </li>
                    </ul>
                </p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 6º - Límite Máximo de Responsabilidad por Asegurado</h3>
                <p>Puede pactarse un Límite Máximo Anual de Responsabilidad por Asegurado. La responsabilidad de la Compañía por todos los siniestros ocurridos durante el año de vigencia de la cobertura para cada Asegurado estará limitada a la suma máxima establecida en las Condiciones Particulares.</p>
            </div>
            <h1 className='text-primary-blue text-xl font-sans font-bold'>CONDICIONES ESPECÍFICAS COBERTURA PARA TRASPLANTES DE ÓRGANOS</h1>
            <div>
                <h3 className='font-bold font-sans text-[#505050]'>Artículo 1º - Riesgo Cubierto</h3>
                <p>La Compañía pagará un beneficio cuando el Asegurado se someta a alguna de las intervenciones quirúrgicas incluidas en el Listado de Beneficios Previstos para Intervenciones Quirúrgicas, que es parte de las Condiciones Particulares.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 2º - Definición de los Trasplantes Cubiertos</h3>
                <p>Se define trasplante como la transferencia de órganos que puede ser: desde un individuo vivo (aloinjertos), del mismo individuo (autoinjertos) o de un cadáver (cadavérico). Las indemnizaciones previstas no incluyen la provisión de órganos. Los trasplantes cubiertos incluyen trasplante de médula ósea, hepático, pulmonar, cardiopulmonar, cardíaco, renal, de páncreas, de córnea e implante de cóclea.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 3º - Período de Carencia</h3>
                <p>Se establece un período de carencia de 120 días, durante el cual no se otorgará ningún beneficio si la enfermedad que origina el trasplante surge. Excepciones se aplican si el trasplante es resultado de un accidente después de la fecha de inicio de la cobertura.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 4º - Beneficio</h3>
                <p>La Compañía abonará al Asegurado el Capital Asegurado para cada trasplante una vez comprobada la realización del mismo. Si se realizan simultáneamente varios trasplantes, se abonará el de mayor capital asegurado más un 20% del de menor valor. La indemnización se efectivizará dentro de los 15 días de cumplimentada la documentación necesaria.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 5º - Requisitos para la Validez del Diagnóstico</h3>
                <p>El trasplante se reconocerá cuando se agoten otros medios terapéuticos y se cumplan las disposiciones legales. El Asegurado debe informar a la Compañía sobre la necesidad de trasplante y cumplir con los requisitos legales y médicos, incluida la comunicación previa al INCUCAI o entidad similar.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 6º - Exclusiones Específicas</h3>
                <p>Quedan excluidos de la cobertura los trasplantes ilícitos, experimentales o realizados por personal no habilitado legalmente.</p>
            </div>
            <h1 className='text-primary-blue text-xl font-sans font-bold'>CONDICIONES ESPECÍFICAS COBERTURA DE PRÓTESIS Y ORTESIS</h1>
            <div>
                <h3 className='font-bold font-sans text-[#505050]'>Artículo 1º - Riesgo Cubierto</h3>
                <p>La Compañía concederá el beneficio previsto cuando al Asegurado le sea implantada una prótesis u ortesis dentro de las especialidades detalladas en el Listado de Beneficios Previstos, que es parte de las Condiciones Particulares.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 2º - Renovación</h3>
                <p>La renovación de la prótesis u ortesis será cubierta después de 5 años desde la implantación inicial o última renovación, según corresponda. Para ciertas prótesis, el plazo se reduce a 3 años. Algunas prótesis serán cubiertas una única vez durante la vigencia de la cobertura. Se pueden pactar plazos diferentes en las Condiciones Particulares. La Compañía no cubrirá reemplazos por rechazo del paciente de la prótesis implantada.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 3º - Período de Carencia</h3>
                <p>Se establece un período de carencia de 90 días, durante el cual no se otorgará ningún beneficio si la enfermedad que origina la necesidad de la prótesis u ortesis surge. Excepciones aplican si la necesidad es por accidente después de la fecha de inicio de la cobertura.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 4º - Beneficio</h3>
                <p>La Compañía abonará el Capital Asegurado correspondiente luego de la implantación, comprobada por su auditoría médica. Se establece un límite máximo anual por persona y un límite máximo anual por todas las prótesis u ortesis. La indemnización se efectivizará dentro de los 15 días de cumplimentada la documentación necesaria.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 5º - Requisitos para la Validez del Diagnóstico</h3>
                <p>La Compañía requiere un informe escrito por un especialista dentro de los 30 días de la implantación, acompañado de documentación respaldatoria. La omisión o demora en la comunicación puede resultar en la pérdida del derecho a la indemnización.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 6º - Exclusiones Específicas</h3>
                <p>La Compañía no indemnizará prótesis u ortesis no detalladas en el Listado de Beneficios Previstos. Tampoco indemnizará ciertas prótesis estéticas, bucodentales, miogénicas o bioeléctricas, ni renovaciones de prótesis preexistentes al ingreso al seguro.</p>

            </div>
            <h1 className='text-primary-blue text-xl font-sans font-bold'>CONDICIONES ESPECÍFICAS COBERTURA DE RENTA DIARIA POR INTERNACIÓN</h1>
            <div>
                <h2 className='text-primary-blue text-base font-varela'>ALTERNATIVA A: COBERTURA RETROACTIVA POR CUALQUIER CAUSA</h2>
                <h3 className='font-bold font-sans text-[#505050]'>Artículo 1º - Riesgo Cubierto</h3>
                <p>La Compañía concederá el beneficio previsto cuando el Asegurado sea internado en un Establecimiento Asistencial que cumpla con las características definidas en las Condiciones Generales de la póliza, siempre que no haya alcanzado la Edad Máxima de Permanencia en el Seguro definida en las Condiciones Particulares.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 2º - Período de Carencia</h3>
                <p>Se establece un período de carencia de 90 días, durante el cual no se otorgará ningún beneficio si la internación ocurre. Excepciones aplican si la internación es resultado de un accidente después de la fecha de inicio de la cobertura.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 3º - Beneficio</h3>
                <p>La Compañía abonará al Asegurado una renta diaria por cada día de internación, variando según el tipo de sala. Se establecen límites máximos anuales por persona y por tipo de internación. La renta se comenzará a abonar después de un período de espera establecido en las Condiciones Particulares.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 4º - Requisitos para la Validez del Diagnóstico</h3>
                <p>Es requisito indispensable que la internación sea prescripta por un profesional médico. El Asegurado debe informar a la Compañía cualquier internación dentro de los 5 días de haber ocurrido. La Compañía requiere un informe escrito por un especialista dentro de los 30 días de la fecha de alta del Asegurado.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 5º - Exclusiones Específicas</h3>
                <p>Quedan excluidas de la cobertura las internaciones relacionadas con maternidad, afecciones del recién nacido, alteraciones mentales, revisiones de rutina, cirugías cosméticas, tratamientos por obesidad, entre otras.</p>

            </div>
            <div>
                <h2 className='text-primary-blue text-base font-varela'>ALTERNATIVA B – COBERTURA NO RETROACTIVA POR CUALQUIER CAUSA</h2>
                <h3 className='font-bold font-sans text-[#505050]'>Artículo 1º - Riesgo Cubierto</h3>
                <p>La Compañía concederá el beneficio previsto cuando el Asegurado sea internado en un Establecimiento Asistencial que cumpla con las características definidas en las Condiciones Generales de esta póliza, siempre que no haya alcanzado la Edad Máxima de Permanencia en el Seguro definida en las Condiciones Particulares para esta cobertura.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 2º - Período de Carencia</h3>
                <p>Se establece un período de carencia de 90 días, durante el cual no se otorgará ningún beneficio si la internación ocurre. Excepciones aplican si la internación es resultado de un accidente después de la fecha de inicio de la cobertura.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 3º - Beneficio</h3>
                <p>La Compañía abonará al Asegurado una renta diaria por cada día de internación, variando según el tipo de sala. Se establecen límites máximos anuales por persona y por tipo de internación. La renta se comenzará a abonar después de un período de espera establecido en las Condiciones Particulares.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 4º - Requisitos para la Validez del Diagnóstico</h3>
                <p>Es requisito indispensable que la internación sea prescripta por un profesional médico. El Asegurado debe informar a la Compañía cualquier internación dentro de los 5 días de haber ocurrido. La Compañía requiere un informe escrito por un especialista dentro de los 30 días de la fecha de alta del Asegurado.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 5º - Exclusiones Específicas</h3>
                <p>Quedan excluidas de la cobertura las internaciones relacionadas con maternidad, afecciones del recién nacido, alteraciones mentales, revisiones de rutina, cirugías cosméticas, tratamientos por obesidad, entre otras.</p>

            </div>
            <div>
                <h2 className='text-primary-blue text-base font-varela'>ALTERNATIVA C – COBERTURA RETROACTIVA POR ACCIDENTE</h2>
                <h3 className='font-bold font-sans text-[#505050]'>Artículo 1º - Riesgo Cubierto</h3>
                <p>La Compañía concederá el beneficio previsto cuando el Asegurado sea internado en un Establecimiento Asistencial, que cumpla con las características definidas en las Condiciones Generales de esta póliza, como consecuencia inmediata de un Accidente y siempre que el Asegurado, a la fecha del Accidente, no haya alcanzado la Edad Máxima de Permanencia en el Seguro definida en las Condiciones Particulares para esta cobertura.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 2º - Beneficio</h3>
                <p>La Compañía abonará al Asegurado una renta diaria por cada día de internación, variando según el tipo de sala. Se establecen límites máximos anuales por persona y por tipo de internación. La renta se comenzará a abonar después de un período de espera establecido en las Condiciones Particulares.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 3º - Requisitos para la Validez del Diagnóstico</h3>
                <p>Es requisito indispensable que la internación haya sido prescripta por un profesional médico. El Asegurado debe informar a la Compañía cualquier internación en un Establecimiento Asistencial dentro de los 5 días de haberse efectuado. La Compañía requiere un informe escrito por un especialista dentro de los 30 días de la fecha de alta del Asegurado.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 4º - Exclusiones Específicas</h3>
                <p>Quedan excluidas de la cobertura las internaciones como consecuencia de accidentes sufridos por el recién nacido durante sus primeros 30 días de vida, accidentes relacionados con alteraciones mentales, cirugías cosméticas no reparadoras, y estadías en establecimientos que no califiquen como Establecimientos Asistenciales bajo esta póliza.</p>
            </div>
            <div>
                <h2 className='text-primary-blue text-base font-varela'>ALTERNATIVA D – COBERTURA NO RETROACTIVA POR ACCIDENTE</h2>
                <h3 className='font-bold font-sans text-[#505050]'>Artículo 1º - Riesgo Cubierto</h3>
                <p>La Compañía concederá el beneficio previsto cuando el Asegurado sea internado en un Establecimiento Asistencial, que cumpla con las características definidas en las Condiciones Generales de esta póliza, como consecuencia inmediata de un Accidente y siempre que el Asegurado, a la fecha del Accidente, no haya alcanzado la Edad Máxima de Permanencia en el Seguro definida en las Condiciones Particulares para esta cobertura.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 2º - Beneficio</h3>
                <p>La Compañía abonará al Asegurado una renta diaria por cada día de internación, variando según el tipo de sala. Se establecen límites máximos anuales por persona y por tipo de internación. La renta se comenzará a abonar después de un período de espera establecido en las Condiciones Particulares.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 3º - Requisitos para la Validez del Diagnóstico</h3>
                <p>Es requisito indispensable que la internación haya sido prescripta por un profesional médico. El Asegurado debe informar a la Compañía cualquier internación en un Establecimiento Asistencial dentro de los 5 días de haberse efectuado. La Compañía requiere un informe escrito por un especialista dentro de los 30 días de la fecha de alta del Asegurado.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 4º - Exclusiones Específicas</h3>
                <p>Quedan excluidas de la cobertura las internaciones como consecuencia de accidentes sufridos por el recién nacido durante sus primeros 30 días de vida, accidentes relacionados con alteraciones mentales, cirugías cosméticas no reparadoras, y estadías en establecimientos que no califiquen como Establecimientos Asistenciales bajo esta póliza.</p>
            </div>
            <div>
                <h2 className='text-primary-blue text-base font-varela'>ALTERNATIVA E – COBERTURA RETROACTIVA EN UNIDAD DE TERAPIA INTENSIVA</h2>
                <h3 className='font-bold font-sans text-[#505050]'>Artículo 1º - Riesgo Cubierto</h3>
                <p>La Compañía otorgará el beneficio cuando el Asegurado sea internado en Unidad de Terapia Intensiva o Unidad Coronaria, en un Establecimiento Asistencial que cumpla con las características definidas en las Condiciones Generales de la póliza, siempre que el Asegurado no haya alcanzado la Edad Máxima de Permanencia en el Seguro establecida en las Condiciones Particulares.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 2º - Período de Carencia</h3>
                <p>Se establece un período de carencia de 90 días, contado desde la fecha de inicio de vigencia de la cobertura de la presente Condición Específica para cada Asegurado, salvo pacto en contrario previsto en las Condiciones Particulares. No se otorgará ningún beneficio si la internación ocurre durante este período de carencia, excepto cuando tenga su origen en un accidente ocurrido después de la fecha de inicio de vigencia.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 3º - Beneficio</h3>
                <p>La Compañía abonará al Asegurado una renta diaria por cada día de internación en Unidad de Terapia Intensiva o Unidad Coronaria, según lo establecido en las Condiciones Particulares. La renta diaria se comenzará a abonar después de un período de espera y por el Plazo Máximo de Cobertura por Siniestro establecidos en las Condiciones Particulares. La indemnización máxima anual por cada año de vigencia de la cobertura será la correspondiente al Plazo Máximo de Cobertura Anual consignado en las Condiciones Particulares.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 4º - Requisitos para la Validez del Diagnóstico</h3>
                <p>Es requisito indispensable que la internación haya sido prescripta por un profesional médico. El Asegurado debe informar a la Compañía cualquier internación en un Establecimiento Asistencial dentro de los 5 días de haberse efectuado. La Compañía requiere un informe escrito por un especialista dentro de los 30 días de la fecha de alta del Asegurado.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 5º - Exclusiones Específicas</h3>
                <p>Quedan excluidas de esta cobertura las internaciones como consecuencia de maternidad, afecciones del recién nacido durante sus primeros 30 días de vida, alteraciones mentales, cirugía plástica para condiciones preexistentes, cirugías cosméticas no reparadoras, tratamientos por obesidad y/o rejuvenecimiento, y estadías en establecimientos que no califiquen como Establecimientos Asistenciales bajo esta póliza.</p>
            </div>
            <div>
                <h2 className='text-primary-blue text-base font-varela'>ALTERNATIVA F – COBERTURA NO RETROACTIVA EN UNIDAD DE TERAPIA INTENSIVA</h2>
                <h3 className='font-bold font-sans text-[#505050]'>Artículo 1º - Riesgo Cubierto</h3>
                <p>La Compañía otorgará el beneficio cuando el Asegurado sea internado en Unidad de Terapia Intensiva o Unidad Coronaria, en un Establecimiento Asistencial que cumpla con las características definidas en las Condiciones Generales de esta póliza, siempre que el Asegurado no haya alcanzado la Edad Máxima de Permanencia en el Seguro definida en las Condiciones Particulares para esta cobertura.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 2º - Período de Carencia</h3>
                <p>Se establece un período de carencia de 90 días, contado desde la fecha de inicio de vigencia de la cobertura de la presente Condición Específica para cada Asegurado, salvo pacto en contrario previsto en las Condiciones Particulares. Ningún beneficio se otorgará si la internación ocurre durante este período de carencia, excepto cuando tenga su origen en un accidente ocurrido después de la fecha de inicio de vigencia de la cobertura para cada Asegurado.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 3º - Beneficio</h3>
                <p>La Compañía abonará al Asegurado una renta diaria por cada día de internación en Unidad de Terapia Intensiva o Unidad Coronaria, según lo establecido en las Condiciones Particulares. La renta diaria se comenzará a abonar después del Período de Espera y por el Plazo Máximo de Cobertura por Siniestro establecidos en las Condiciones Particulares. La indemnización máxima anual por cada año de vigencia de la cobertura será la correspondiente al Plazo Máximo de Cobertura Anual consignado en las Condiciones Particulares.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 4º - Requisitos para la Validez del Diagnóstico</h3>
                <p>Es requisito indispensable que la internación haya sido prescripta por un profesional médico. El Asegurado debe informar a la Compañía cualquier internación en un Establecimiento Asistencial dentro de los 5 días de haberse efectuado. La Compañía requiere un informe escrito por un especialista dentro de los 30 días de la fecha de alta del Asegurado.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 5º - Exclusiones Específicas</h3>
                <p>Quedan excluidas de esta cobertura las internaciones como consecuencia de maternidad, afecciones del recién nacido durante sus primeros 30 días de vida, alteraciones mentales, cirugía plástica para condiciones preexistentes, cirugías cosméticas no reparadoras, tratamientos por obesidad y/o rejuvenecimiento, y estadías en establecimientos que no califiquen como Establecimientos Asistenciales bajo esta póliza.</p>
            </div>
            <div>
                <h2 className='text-primary-blue text-base font-varela'>ALTERNATIVA G – COBERTURA RETROACTIVA INTERNACIONES CLÍNICAS O NO QUIRÚRGICAS</h2>
                <h3 className='font-bold font-sans text-[#505050]'>Artículo 1º - Riesgo Cubierto</h3>
                <p>La Compañía otorgará el beneficio previsto cuando el Asegurado sea internado en un Establecimiento Asistencial que cumpla con las características definidas en las Condiciones Generales de esta póliza, siempre que:</p>
                <ul className='list-disc pl-6'>
                    <li>la internación se deba a causas clínicas;</li>
                    <li>no derive en una intervención quirúrgica (días pre y post quirúrgicos);</li>
                    <li>el Asegurado no haya alcanzado la Edad Máxima de Permanencia en el Seguro definida en las Condiciones Particulares para esta cobertura.</li>
                </ul>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 2º - Período de Carencia</h3>
                <p>Se establece un período de carencia de 90 días, contado desde la fecha de inicio de vigencia de la cobertura de la presente Condición Específica para cada Asegurado, salvo pacto en contrario previsto en las Condiciones Particulares. Ningún beneficio se otorgará si la internación ocurre durante este período de carencia, excepto cuando tenga su origen en un accidente ocurrido después de la fecha de inicio de vigencia de la cobertura para cada Asegurado.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 3º - Beneficio</h3>
                <p>La Compañía abonará al Asegurado una renta diaria por cada día de internación del Asegurado. El monto de dicha renta diaria podrá variar según el tipo de internación, y se comenzará a abonar después del Período de Espera y por el Plazo Máximo de Cobertura por Siniestro, ambos establecidos en las Condiciones Particulares.</p>
                <p>Se establece un Plazo Máximo de Cobertura para cada tipo de internación y por cada año de vigencia de la cobertura, comprendido dentro del Plazo Máximo de Cobertura por Siniestro y Anual, respectivamente.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 4º - Requisitos para la Validez del Diagnóstico</h3>
                <p>Es requisito indispensable que la internación haya sido prescripta por un profesional médico. El Asegurado debe informar a la Compañía cualquier internación en un Establecimiento Asistencial dentro de los 5 días de haberse efectuado. La Compañía requiere un informe escrito por un especialista dentro de los 30 días de la fecha de alta del Asegurado.</p>
                <p>La omisión o demora en la comunicación dará lugar a la pérdida del derecho del Asegurado a percibir el beneficio previsto en esta Condición Específica, salvo en casos de fuerza mayor, caso fortuito o imposibilidad de hecho sin culpa o negligencia.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 5º - Exclusiones Específicas</h3>
                <ul className='list-disc pl-6'>
                    <li>Maternidad: comprende toda internación durante el embarazo, parto y hasta 45 días después del parto.</li>
                    <li>Afecciones del recién nacido que demanden internación durante sus primeros 30 días de vida.</li>
                    <li>Alteraciones mentales.</li>
                    <li>Revisiones de rutina, diagnóstico, análisis, radiografías, radioscopias o fisioterapia, salvo que resulten en internación.</li>
                    <li>Cirugía plástica para condiciones preexistentes.</li>
                    <li>Cirugías cosméticas no reparadoras.</li>
                    <li>Cura de reposo.</li>
                    <li>Tratamientos por obesidad y/o rejuvenecimiento, en sus diversas modalidades.</li>
                    <li>Estadías en establecimientos no calificados como Establecimientos Asistenciales bajo esta póliza.</li>
                    <li>Intervenciones quirúrgicas y/o cirugías (días previos y posteriores).</li>
                </ul>
            </div>
            <div>
                <h2 className='text-primary-blue text-base font-varela'>ALTERNATIVA H – COBERTURA NO RETROACTIVA INTERNACIONES CLÍNICAS O NO QUIRÚRGICAS</h2>
                <h3 className='font-bold font-sans text-[#505050]'>Artículo 1º - Riesgo Cubierto</h3>
                <p>La Compañía otorgará el beneficio previsto cuando el Asegurado sea internado en un Establecimiento Asistencial que cumpla con las características definidas en las Condiciones Generales de esta póliza, siempre que:</p>
                <ul className='list-disc pl-6'>
                    <li>la internación se deba a causas clínicas;</li>
                    <li>no derive en una intervención quirúrgica (días pre y post quirúrgicos);</li>
                    <li>el Asegurado no haya alcanzado la Edad Máxima de Permanencia en el Seguro definida en las Condiciones Particulares para esta cobertura.</li>
                </ul>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 2º - Período de Carencia</h3>
                <p>Se establece un período de carencia de 90 días, contado desde la fecha de inicio de vigencia de la cobertura de la presente Condición Específica para cada Asegurado, salvo pacto en contrario previsto en las Condiciones Particulares. Ningún beneficio se otorgará si la internación ocurre durante este período de carencia, excepto cuando tenga su origen en un accidente ocurrido después de la fecha de inicio de vigencia de la cobertura para cada Asegurado.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 3º - Beneficio</h3>
                <p>La Compañía abonará al Asegurado una renta diaria por cada día de internación del Asegurado en un Establecimiento Asistencial, según lo establecido en las Condiciones Particulares. La renta diaria se comenzará a abonar después del Período de Espera y por el Plazo Máximo de Cobertura por Siniestro establecidos en las Condiciones Particulares. La indemnización máxima anual por cada año de vigencia de la cobertura será la correspondiente al Plazo Máximo de Cobertura Anual consignado en las Condiciones Particulares.</p>
                <p>Se establece un Plazo Máximo de Cobertura para cada tipo de internación y por cada año de vigencia de la cobertura, comprendido dentro del Plazo Máximo de Cobertura por Siniestro y Anual, respectivamente.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 4º - Requisitos para la Validez del Diagnóstico</h3>
                <p>Es requisito indispensable que la internación haya sido prescripta por un profesional médico. El Asegurado debe informar a la Compañía cualquier internación en un Establecimiento Asistencial dentro de los 5 días de haberse efectuado. La Compañía requiere un informe escrito por un especialista dentro de los 30 días de la fecha de alta del Asegurado.</p>
                <p>La omisión o demora en la comunicación dará lugar a la pérdida del derecho del Asegurado a percibir el beneficio previsto en esta Condición Específica, salvo en casos de fuerza mayor, caso fortuito o imposibilidad de hecho sin culpa o negligencia.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 5º - Exclusiones Específicas</h3>
                <ul className='list-disc pl-6'>
                    <li>Maternidad: comprende toda internación durante el embarazo, parto y hasta 45 días después del parto.</li>
                    <li>Afecciones del recién nacido que demanden internación durante sus primeros 30 días de vida.</li>
                    <li>Alteraciones mentales.</li>
                    <li>Revisiones de rutina, diagnóstico, análisis, radiografías, radioscopias o fisioterapia, salvo que resulten en internación.</li>
                    <li>Cirugía plástica para condiciones preexistentes.</li>
                    <li>Cirugías cosméticas no reparadoras.</li>
                    <li>Cura de reposo.</li>
                    <li>Tratamientos por obesidad y/o rejuvenecimiento.</li>
                    <li>Estadías en establecimientos no calificados como Establecimientos Asistenciales bajo esta póliza.</li>
                    <li>Intervenciones quirúrgicas y/o cirugías (días previos y posteriores).</li>
                </ul>
            </div>
            <div>
                <h2 className='text-primary-blue text-base font-varela'>ALTERNATIVA I – COBERTURA RETROACTIVA INTERNACIONES QUIRÚRGICAS</h2>
                <h3 className='font-bold font-sans text-[#505050]'>Artículo 1º - Riesgo Cubierto</h3>
                <p>La Compañía concederá el beneficio previsto cuando el Asegurado sea internado en un Establecimiento Asistencial que cumpla con las características definidas en las Condiciones Generales de esta póliza, siempre que:</p>
                <ul className='list-disc pl-6'>
                    <li>la internación tenga su origen en una intervención quirúrgica a la cual deba someterse el Asegurado o la internación derive en una intervención quirúrgica (días pre y post quirúrgicos);</li>
                    <li>el Asegurado no haya alcanzado la Edad Máxima de Permanencia en el Seguro definida en las Condiciones Particulares para esta cobertura.</li>
                </ul>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 2º - Período de Carencia</h3>
                <p>Se establece un período de carencia de 90 días, contado desde la fecha de inicio de vigencia de la cobertura de la presente Condición Específica para cada Asegurado, salvo pacto en contrario previsto en las Condiciones Particulares. Ningún beneficio se otorgará si la internación ocurre durante este período de carencia, excepto cuando tenga su origen en un accidente ocurrido después de la fecha de inicio de vigencia de la cobertura para cada Asegurado.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 3º - Beneficio</h3>
                <p>La Compañía abonará al Asegurado una renta diaria por cada día de internación del Asegurado. El monto de dicha renta diaria podrá variar según el tipo de internación y se comenzará a abonar después del Período de Espera y por el Plazo Máximo de Cobertura por Siniestro, ambos establecidos en las Condiciones Particulares.</p>
                <p>Se establece un Plazo Máximo de Cobertura para cada tipo de internación y por cada año de vigencia de la cobertura, comprendido dentro del Plazo Máximo de Cobertura por Siniestro y Anual, respectivamente.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 4º - Requisitos para la Validez del Diagnóstico</h3>
                <p>Es requisito indispensable que la internación haya sido prescripta por un profesional médico. El Asegurado debe informar a la Compañía cualquier internación en un Establecimiento Asistencial dentro de los 5 días de haberse efectuado. La Compañía requiere un informe escrito por un especialista dentro de los 30 días de la fecha de alta del Asegurado.</p>
                <p>La omisión o demora en la comunicación dará lugar a la pérdida del derecho del Asegurado a percibir el beneficio previsto en esta Condición Específica, salvo en casos de fuerza mayor, caso fortuito o imposibilidad de hecho sin culpa o negligencia.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 5º - Exclusiones Específicas</h3>
                <ul className='list-disc pl-6'>
                    <li>Maternidad: comprende toda internación durante el embarazo, parto y hasta 45 días después del parto.</li>
                    <li>Afecciones del recién nacido que demanden internación durante sus primeros 30 días de vida.</li>
                    <li>Alteraciones mentales.</li>
                    <li>Revisiones de rutina, diagnóstico, análisis, radiografías, radioscopias o fisioterapia, salvo que resulten en internación.</li>
                    <li>Cirugía plástica para condiciones preexistentes.</li>
                    <li>Cirugías cosméticas no reparadoras.</li>
                    <li>Cura de reposo.</li>
                    <li>Tratamientos por obesidad y/o rejuvenecimiento, en sus diversas modalidades.</li>
                    <li>Estadías en establecimientos no calificados como Establecimientos Asistenciales bajo esta póliza.</li>
                    <li>Causas clínicas que no deriven en una intervención quirúrgica. Si en algún caso una internación clínica tuviera durante el período de internación alguna práctica quirúrgica tal como punciones, canalizaciones, biopsias, donde el diagnóstico principal y el tratamiento principal es sobre una patología eminentemente clínica, esta internación también queda excluida.</li>
                </ul>
            </div>
            <div>
                <h2 className='text-primary-blue text-base font-varela'>ALTERNATIVA J – COBERTURA NO RETROACTIVA INTERNACIONES QUIRÚRGICAS</h2>
                <h3 className='font-bold font-sans text-[#505050]'>Artículo 1º - Riesgo Cubierto</h3>
                <p>La Compañía concederá el beneficio previsto cuando el Asegurado sea internado en un Establecimiento Asistencial que cumpla con las características definidas en las Condiciones Generales de esta póliza, siempre que:</p>
                <ul className='list-disc pl-6'>
                    <li>la internación tenga su origen en una intervención quirúrgica a la cual deba someterse el Asegurado o la internación derive en una intervención quirúrgica (días pre y post quirúrgicos);</li>
                    <li>el Asegurado no haya alcanzado la Edad Máxima de Permanencia en el Seguro definida en las Condiciones Particulares para esta cobertura.</li>
                </ul>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 2º - Período de Carencia</h3>
                <p>Se establece un período de carencia de 90 días, contado desde la fecha de inicio de vigencia de la cobertura de la presente Condición Específica para cada Asegurado, salvo pacto en contrario previsto en las Condiciones Particulares. Ningún beneficio se otorgará si la internación ocurre durante este período de carencia, excepto cuando tenga su origen en un accidente ocurrido después de la fecha de inicio de vigencia de la cobertura para cada Asegurado.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 3º - Beneficio</h3>
                <p>La Compañía abonará al Asegurado una renta diaria por cada día de internación del Asegurado. El monto de dicha renta diaria podrá variar según el tipo de internación y se comenzará a abonar después del Período de Espera establecido en las Condiciones Particulares, cuando la internación supere la cantidad de días completos y consecutivos establecida como Período de Espera y por el Plazo Máximo de Cobertura por Siniestro previsto en dichas Condiciones Particulares.</p>
                <p>Se establece un Plazo Máximo de Cobertura para cada tipo de internación y por cada año de vigencia de la cobertura, comprendido dentro del Plazo Máximo de Cobertura por Siniestro y Anual, respectivamente.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 4º - Requisitos para la Validez del Diagnóstico</h3>
                <p>Es requisito indispensable que la internación haya sido prescripta por un profesional médico. El Asegurado debe informar a la Compañía cualquier internación en un Establecimiento Asistencial dentro de los 5 días de haberse efectuado. La Compañía requiere un informe escrito por un especialista dentro de los 30 días de la fecha de alta del Asegurado.</p>
                <p>La omisión o demora en la comunicación dará lugar a la pérdida del derecho del Asegurado a percibir el beneficio previsto en esta Condición Específica, salvo en casos de fuerza mayor, caso fortuito o imposibilidad de hecho sin culpa o negligencia.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 5º - Exclusiones Específicas</h3>
                <ul className='list-disc pl-6'>
                    <li>Maternidad: comprende toda internación durante el embarazo, parto y hasta 45 días después del parto.</li>
                    <li>Afecciones del recién nacido que demanden internación durante sus primeros 30 días de vida.</li>
                    <li>Alteraciones mentales.</li>
                    <li>Revisiones de rutina, diagnóstico, análisis, radiografías, radioscopias o fisioterapia, salvo que resulten en internación.</li>
                    <li>Cirugía plástica para condiciones preexistentes.</li>
                    <li>Cirugías cosméticas no reparadoras.</li>
                    <li>Cura de reposo.</li>
                    <li>Tratamientos por obesidad y/o rejuvenecimiento, en sus diversas modalidades.</li>
                    <li>Estadías en establecimientos no calificados como Establecimientos Asistenciales bajo esta póliza.</li>
                    <li>Causas clínicas que no deriven en una intervención quirúrgica. Si en algún caso una internación clínica tuviera durante el período de internación alguna práctica quirúrgica tal como punciones, canalizaciones, biopsias, donde el diagnóstico principal y el tratamiento principal es sobre una patología eminentemente clínica, esta internación también queda excluida.</li>
                </ul>
            </div>
            <div>
                <h2 className='text-primary-blue text-base font-varela'>ALTERNATIVA K – COBERTURA RETROACTIVA POR CUALQUIER CAUSA (INCLUYE INTERNACIÓN DOMICILIARIA)</h2>
                <h3 className='font-bold font-sans text-[#505050]'>Artículo 1º - Riesgo Cubierto</h3>
                <p>La Compañía concederá el beneficio previsto cuando el Asegurado sea internado en un Establecimiento Asistencial que cumpla con las características definidas en las Condiciones Generales de esta póliza, o en su domicilio particular, siempre que el mismo no haya alcanzado la Edad Máxima de Permanencia en el Seguro definida en las Condiciones Particulares para esta cobertura.</p>
                <p>A los efectos de la cobertura prevista en las presentes Condiciones Específicas, se entiende por “Domicilio Particular del Asegurado” el lugar donde el Asegurado habita, ya sea su propio domicilio, el domicilio de un familiar o una persona allegada al mismo, en el cual el Asegurado mantuviera una internación domiciliaria.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 2º - Período de Carencia</h3>
                <p>Se establece un período de carencia de 90 días, contado desde la fecha de inicio de vigencia de la cobertura de la presente Condición Específica para cada Asegurado, salvo pacto en contrario previsto en las Condiciones Particulares. Ningún beneficio se otorgará si la internación ocurre durante este período de carencia, excepto cuando tenga su origen en un accidente ocurrido después de la fecha de inicio de vigencia de la cobertura para cada Asegurado.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 3º - Beneficio</h3>
                <p>La Compañía abonará al Asegurado una renta diaria por cada día de internación del Asegurado. El monto de dicha renta diaria podrá variar según el tipo de internación, ya sea en sala común, terapia intermedia y cuidados especiales, terapia intensiva y unidad coronaria, o en el domicilio particular del Asegurado.</p>
                <p>La renta diaria se comenzará a abonar desde el primer día de internación después de que esta supere el Período de Espera y el Plazo Máximo de Cobertura por Siniestro, ambos valores establecidos en las Condiciones Particulares.</p>
                <p>La internación podrá tener lugar en uno o varios Establecimientos Asistenciales y/o en el domicilio del Asegurado de forma alternada, siempre que no sea interrumpida.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 4º - Requisitos para la Validez del Diagnóstico</h3>
                <p>Es requisito indispensable que la internación haya sido prescripta por un profesional médico. En el caso de la internación domiciliaria, también se requiere un informe del médico tratante que manifieste la necesidad de la internación y brinde su conformidad para que esta tenga lugar en el domicilio particular del Asegurado.</p>
                <p>El Asegurado debe informar a la Compañía cualquier internación en un Establecimiento Asistencial o en su domicilio particular dentro de los 5 días de haberse efectuado.</p>

                <h3 className='font-bold font-sans text-[#505050]'>Artículo 5º - Exclusiones Específicas</h3>
                <ul className='list-disc pl-6'>
                    <li>Maternidad: comprende toda internación durante el embarazo, parto y hasta 45 días después del parto.</li>
                    <li>Afecciones del recién nacido que demanden internación durante sus primeros 30 días de vida.</li>
                    <li>Alteraciones mentales.</li>
                    <li>Revisiones de rutina, diagnóstico, análisis, radiografías, radioscopias o fisioterapia, salvo que resulten en internación.</li>
                    <li>Cirugía plástica para condiciones preexistentes.</li>
                    <li>Cirugías cosméticas no reparadoras.</li>
                    <li>Cura de reposo.</li>
                    <li>Tratamientos por obesidad y/o rejuvenecimiento, en sus diversas modalidades.</li>
                    <li>Estadías en establecimientos no calificados como Establecimientos Asistenciales bajo esta póliza.</li>
                </ul>
            </div>
            <div>
                <h2 className='text-primary-blue text-base font-varela'>ALTERNATIVA L – COBERTURA NO RETROACTIVA POR CUALQUIER CAUSA (INCLUYE INTERNACIÓN DOMICILIARIA)</h2>
                <h3 className='font-bold font-sans text-gray-700'>Artículo 1º - Riesgo Cubierto</h3>
                <p>La Compañía otorgará el beneficio cuando el Asegurado sea internado en un Establecimiento Asistencial que cumpla con las características definidas en las Condiciones Generales de la póliza, o en su domicilio particular, siempre que no haya alcanzado la Edad Máxima de Permanencia en el Seguro definida en las Condiciones Particulares.</p>
                <p>Para los efectos de esta cobertura, se considera "Domicilio Particular del Asegurado" aquel en el que habita el propio Asegurado, un familiar o una persona allegada al mismo, y donde el Asegurado mantenga una internación domiciliaria.</p>

                <h3 className='font-bold font-sans text-gray-700'>Artículo 2º - Período de Carencia</h3>
                <p>Se establece un período de carencia de 90 días, contados desde la fecha de inicio de vigencia de la cobertura de esta Condición Específica para cada Asegurado, salvo pacto en contrario en las Condiciones Particulares. No se otorgará ningún beneficio si la internación ocurre durante este período de carencia, excepto en casos de accidente ocurrido después de la fecha de inicio de vigencia de la cobertura.</p>

                <h3 className='font-bold font-sans text-gray-700'>Artículo 3º - Beneficio</h3>
                <p>La Compañía abonará al Asegurado una renta diaria por cada día de internación, que variará según el tipo de internación (sala común, terapia intermedia y cuidados especiales, terapia intensiva y unidad coronaria, o en el domicilio particular del Asegurado). Además, se podrán prever montos diarios diferenciados para internaciones en Establecimientos Asistenciales del exterior.</p>
                <p>La renta diaria se comenzará a abonar desde el día siguiente a la finalización del Período de Espera establecido en las Condiciones Particulares, cuando la internación supere la cantidad de días completos y consecutivos establecida como Período de Espera, y por el Plazo Máximo de Cobertura por Siniestro previsto en dichas Condiciones Particulares. La internación puede ocurrir en uno o varios Establecimientos Asistenciales y/o en el domicilio del Asegurado de forma alternada, siempre que no sea interrumpida.</p>
                <p>La indemnización máxima para cada año de vigencia de la cobertura será la correspondiente al Plazo Máximo de Cobertura Anual consignado en las Condiciones Particulares. Además, se establece un Plazo Máximo de Cobertura para distintos tipos de internación y un Plazo Máximo de Cobertura para Internación Domiciliaria, ambos aplicables por cada siniestro y por cada año de vigencia de la cobertura.</p>

                <h3 className='font-bold font-sans text-gray-700'>Artículo 4º - Requisitos para la Validez del Diagnóstico</h3>
                <p>Es requisito indispensable que la internación haya sido prescripta por un profesional médico. Para la internación domiciliaria, el médico tratante debe emitir un informe donde manifieste la necesidad de la internación y brinde su conformidad para que esta tenga lugar en el domicilio particular del Asegurado.</p>
                <p>El Asegurado debe informar a la Compañía cualquier internación en un Establecimiento Asistencial o en su domicilio particular dentro de los 5 días de haberse efectuado.</p>

                <h3 className='font-bold font-sans text-gray-700'>Artículo 5º - Exclusiones Específicas</h3>
                <ul className='list-disc pl-6'>
                    <li>Maternidad: comprende toda internación durante el embarazo, parto y hasta 45 días después del parto.</li>
                    <li>Afecciones del recién nacido que demanden internación durante sus primeros 30 días de vida.</li>
                    <li>Alteraciones mentales.</li>
                    <li>Revisiones de rutina, diagnóstico, análisis, radiografías, radioscopias o fisioterapia, salvo que resulten en internación.</li>
                    <li>Cirugía plástica para condiciones preexistentes.</li>
                    <li>Cirugías cosméticas no reparadoras.</li>
                    <li>Cura de reposo.</li>
                    <li>Tratamientos por obesidad y/o rejuvenecimiento, en sus diversas modalidades.</li>
                    <li>Estadías en establecimientos no calificados como Establecimientos Asistenciales bajo esta póliza.</li>
                </ul>
            </div>
            <div>
                <h2 className='text-primary-blue text-base font-varela'>ALTERNATIVA M – COBERTURA RETROACTIVA POR ACCIDENTE (INCLUYE INTERNACIÓN DOMICILIARIA)</h2>
                <h3 className='font-bold font-sans text-gray-700'>Artículo 1º - Riesgo Cubierto</h3>
                <p>La Compañía otorgará el beneficio cuando el Asegurado sea internado en un Establecimiento Asistencial que cumpla con las características definidas en las Condiciones Generales de la póliza, o en su domicilio particular, como consecuencia de un Accidente y siempre que el Asegurado, a la fecha del Accidente, no haya alcanzado la Edad Máxima de Permanencia en el Seguro definida en las Condiciones Particulares para esta cobertura.</p>
                <p>Para los efectos de esta cobertura, se considera "Domicilio Particular del Asegurado" aquel en el que habita el propio Asegurado, un familiar o una persona allegada al mismo, y donde el Asegurado mantenga una internación domiciliaria.</p>

                <h3 className='font-bold font-sans text-gray-700'>Artículo 2º - Beneficio</h3>
                <p>Una vez comprobada la internación por parte de su auditoría médica, la Compañía abonará al Asegurado una renta diaria por cada día de internación. El monto de dicha renta diaria podrá variar según el tipo de internación (sala común, terapia intermedia y cuidados especiales, terapia intensiva y unidad coronaria, o en el domicilio particular del Asegurado), e incluso podrán preverse montos diarios diferenciados para internaciones en Establecimientos Asistenciales del exterior.</p>
                <p>La renta diaria se comenzará a abonar desde el primer día de internación que supere la cantidad de días completos y consecutivos establecida como Período de Espera y por el Plazo Máximo de Cobertura por Siniestro, ambos valores consignados en las Condiciones Particulares. La internación puede ocurrir en uno o varios Establecimientos Asistenciales y/o en el domicilio del Asegurado de forma alternada, siempre que no sea interrumpida.</p>
                <p>La indemnización máxima para cada año de vigencia de la cobertura será la correspondiente al Plazo Máximo de Cobertura Anual consignado en las Condiciones Particulares. Además, se establece un Plazo Máximo de Cobertura para distintos tipos de internación y un Plazo Máximo de Cobertura para Internación Domiciliaria, ambos aplicables por cada siniestro y por cada año de vigencia de la cobertura.</p>

                <h3 className='font-bold font-sans text-gray-700'>Artículo 3º - Requisitos para la Validez del Diagnóstico</h3>
                <p>Es requisito indispensable que la internación haya sido prescripta por un profesional médico. En el caso particular de la internación domiciliaria, el médico tratante debe emitir un informe donde manifieste la necesidad de la internación y brinde su conformidad para que esta tenga lugar en el domicilio particular del Asegurado.</p>
                <p>El Asegurado debe informar directamente a la Compañía de cualquier internación en un Establecimiento Asistencial o en su domicilio particular dentro de los 5 días de haberse efectuado, salvo casos de fuerza mayor o imposibilidad de hecho sin culpa o negligencia.</p>
                <p>La Compañía debe contar, dentro de los 30 días de la fecha de alta del Asegurado, salvo casos de fuerza mayor o imposibilidad de hecho sin culpa o negligencia, con un informe escrito por un especialista con el diagnóstico, tratamiento efectuado y cantidad de días de internación, en formularios provistos por la Compañía y acompañado de documentación respaldatoria.</p>
                <p>La omisión o la demora en tal comunicación dará lugar a la pérdida del derecho del Asegurado a percibir el beneficio previsto en esta Condición Específica, salvo en los casos de fuerza mayor, caso fortuito o imposibilidad de hecho sin culpa o negligencia.</p>

                <h3 className='font-bold font-sans text-gray-700'>Artículo 4º - Exclusiones Específicas</h3>
                <ul className='list-disc pl-6'>
                    <li>Accidentes sufridos por el recién nacido que demanden su internación durante sus primeros 30 días de vida. Estas internaciones se comenzarán a cubrir a partir del día siguiente a aquel en que el recién nacido cumpla los 30 días de vida.</li>
                    <li>Accidentes ocurridos como consecuencia de alteraciones mentales padecidas por el Asegurado.</li>
                    <li>Cirugías cosméticas no reparadoras.</li>
                    <li>Estadías en establecimientos no calificados como Establecimientos Asistenciales bajo esta póliza.</li>
                </ul>
            </div>
            <div>
                <h2 className='text-primary-blue text-base font-varela'>ALTERNATIVA N – COBERTURA NO RETROACTIVA POR ACCIDENTE (INCLUYE INTERNACIÓN DOMICILIARIA)</h2>
                <h3 className='font-bold font-sans text-gray-700'>Artículo 1º - Riesgo Cubierto</h3>
                <p>La Compañía otorgará el beneficio cuando el Asegurado sea internado en un Establecimiento Asistencial que cumpla con las características definidas en las Condiciones Generales de la póliza, o en su domicilio particular, como consecuencia de un Accidente y siempre que el Asegurado, a la fecha del Accidente, no haya alcanzado la Edad Máxima de Permanencia en el Seguro definida en las Condiciones Particulares para esta cobertura.</p>
                <p>Para los efectos de esta cobertura, se considera "Domicilio Particular del Asegurado" aquel en el que habita el propio Asegurado, un familiar o una persona allegada al mismo, y donde el Asegurado mantenga una internación domiciliaria.</p>

                <h3 className='font-bold font-sans text-gray-700'>Artículo 2º - Beneficio</h3>
                <p>Una vez comprobada la internación por parte de su auditoría médica, la Compañía abonará al Asegurado una renta diaria por cada día de internación. El monto de dicha renta diaria podrá variar según el tipo de internación (sala común, terapia intermedia y cuidados especiales, terapia intensiva y unidad coronaria, o en el domicilio particular del Asegurado), e incluso podrán preverse montos diarios diferenciados para internaciones en Establecimientos Asistenciales del exterior.</p>
                <p>La renta diaria se comenzará a abonar desde el día inmediato siguiente a la finalización del Período de Espera establecido en las Condiciones Particulares, cuando la internación supere la cantidad de días completos y consecutivos establecida como Período de Espera y por el Plazo Máximo de Cobertura por Siniestro previsto en dichas Condiciones Particulares. La internación puede tener lugar en uno o varios Establecimientos Asistenciales y/o en el domicilio del Asegurado de forma alternada, mientras la misma no sea interrumpida.</p>
                <p>La indemnización máxima para cada año de vigencia de la cobertura será la correspondiente al Plazo Máximo de Cobertura Anual consignado en las Condiciones Particulares. Además, se establece un Plazo Máximo de Cobertura para distintos tipos de internación y un Plazo Máximo de Cobertura para Internación Domiciliaria, ambos aplicables por cada siniestro y por cada año de vigencia de la cobertura.</p>

                <h3 className='font-bold font-sans text-gray-700'>Artículo 3º - Requisitos para la Validez del Diagnóstico</h3>
                <p>Es requisito indispensable que la internación haya sido prescripta por un profesional médico. En el caso particular de la internación domiciliaria, el médico tratante debe emitir un informe donde manifieste la necesidad de la internación y brinde su conformidad para que esta tenga lugar en el domicilio particular del Asegurado.</p>
                <p>El Asegurado debe informar directamente a la Compañía de cualquier internación en un Establecimiento Asistencial o en su domicilio particular dentro de los 5 días de haberse efectuado, salvo casos de fuerza mayor o imposibilidad de hecho sin culpa o negligencia.</p>
                <p>La Compañía debe contar, dentro de los 30 días de la fecha de alta del Asegurado, salvo casos de fuerza mayor o imposibilidad de hecho sin culpa o negligencia, con un informe escrito por un especialista con el diagnóstico, tratamiento efectuado y cantidad de días de internación, en formularios provistos por la Compañía y acompañado de documentación respaldatoria.</p>
                <p>La omisión o la demora en tal comunicación dará lugar a la pérdida del derecho del Asegurado a percibir el beneficio previsto en esta Condición Específica, salvo en los casos de fuerza mayor, caso fortuito o imposibilidad de hecho sin culpa o negligencia.</p>

                <h3 className='font-bold font-sans text-gray-700'>Artículo 4º - Exclusiones Específicas</h3>
                <ul className='list-disc pl-6'>
                    <li>Accidentes sufridos por el recién nacido que demanden su internación durante sus primeros 30 días de vida. Estas internaciones se comenzarán a cubrir a partir del día siguiente a aquel en que el recién nacido cumpla los 30 días de vida.</li>
                    <li>Accidentes ocurridos como consecuencia de alteraciones mentales padecidas por el Asegurado.</li>
                    <li>Cirugías cosméticas no reparadoras.</li>
                    <li>Estadías en establecimientos no calificados como Establecimientos Asistenciales bajo esta póliza.</li>
                </ul>
            </div>
            <h1 className='text-primary-blue text-xl font-sans font-bold'>CONDICIONES ESPECÍFICAS COBERTURA DE CUIDADOS PROLONGADOS</h1>
            <div>
                <h2 className='text-primary-blue text-base font-varela'>ALTERNATIVA A - COBERTURA RETROACTIVA POR ENFERMEDAD O ACCIDENTE</h2>
                <h3 className='font-bold font-sans text-gray-700'>Artículo 1º - Riesgo Cubierto</h3>
                <p>La Compañía otorgará el beneficio previsto cuando el Asegurado sufra una incapacidad que le impida realizar al menos dos de las actividades de la vida diaria consideradas básicas, enumeradas y descritas a continuación, y siempre que el mismo no haya alcanzado la edad máxima de permanencia definida en las Condiciones Particulares.</p>
                <ul className='list-disc pl-6'>
                    <li>Bañarse: lavarse completamente en una bañera o ducha con o sin ayuda.</li>
                    <li>Alimentarse: consumir alimentos preparados o disponibles con o sin utensilios de adaptación.</li>
                    <li>Vestirse: ponerse o sacarse la ropa, abrochar o desabrochar vestimenta.</li>
                    <li>Higienizarse: sentarse en o levantarse del inodoro, mantener higiene personal.</li>
                    <li>Transferirse: sentarse o levantarse de una silla o cama.</li>
                </ul>
                <p>Se considerará al Asegurado incapaz de realizar estas actividades si requiere la asistencia física de otra persona.</p>

                <h3 className='font-bold font-sans text-gray-700'>Artículo 2º - Período de Carencia</h3>
                <p>Se establece un período de carencia de 90 días, contados desde la fecha de inicio de vigencia de la cobertura para cada Asegurado, salvo pacto en contrario en las Condiciones Particulares. Durante este período, no se otorgará ningún beneficio si la incapacidad se inicia.</p>

                <h3 className='font-bold font-sans text-gray-700'>Artículo 3º - Beneficio</h3>
                <p>Una vez comprobada la incapacidad por parte de la auditoría médica de la Compañía, se abonará al Asegurado una renta mensual según lo estipulado en las Condiciones Particulares. La renta mensual se comenzará a abonar desde el primer día de la incapacidad, siempre que supere el Plazo de Espera establecido en las Condiciones Particulares, y se pagará mientras dure la incapacidad hasta alcanzar el plazo máximo de pago de beneficio.</p>
                <p>Las fracciones menores al mes se indemnizarán proporcionalmente a los días correspondientes. Si la incapacidad se origina por la misma causa después de haber recibido el beneficio previamente, se considerará como continuación de la anterior, a menos que haya transcurrido un período de doce meses consecutivos.</p>

                <h3 className='font-bold font-sans text-gray-700'>Artículo 4º - Requisitos para la Validez del Diagnóstico</h3>
                <p>Es indispensable que la incapacidad y la necesidad de asistencia hayan sido diagnosticadas por un profesional médico, y el Asegurado debe informar esta situación a la Compañía dentro de los 5 días del diagnóstico. La Compañía debe recibir un informe escrito por un especialista dentro de los 30 días de la fecha de alta del Asegurado, con el diagnóstico y tratamiento efectuado, junto con la documentación respaldatoria.</p>
                <p>La omisión o demora en la comunicación dará lugar a la pérdida del derecho del Asegurado a percibir el beneficio, salvo en casos de fuerza mayor o imposibilidad sin culpa o negligencia.</p>

                <h3 className='font-bold font-sans text-gray-700'>Artículo 5º - Exclusiones Específicas</h3>
                <ul className='list-disc pl-6'>
                    <li>Maternidad</li>
                    <li>Alteraciones mentales</li>
                    <li>Condiciones médicas preexistentes</li>
                    <li>Intervenciones quirúrgicas, incluso necesarias como consecuencia de enfermedades o accidentes</li>
                    <li>Cura de reposo</li>
                </ul>

                <h3 className='font-bold font-sans text-gray-700'>Artículo 6º - Terminación de la Cobertura</h3>
                <p>La cobertura terminará al diagnosticarse y pagarse el beneficio correspondiente al plazo máximo estipulado en las Condiciones Particulares, o a partir del primer día del mes siguiente en que el Asegurado alcance la edad máxima de permanencia definida en las Condiciones Particulares.</p>
            </div>
            <div>
                <h2 className='text-primary-blue text-base font-varela'>ALTERNATIVA B – COBERTURA NO RETROACTIVA POR ENFERMEDAD O ACCIDENTE</h2>
                <h3 className='font-bold font-sans text-gray-700'>Artículo 1º - Riesgo Cubierto</h3>
                <p>La Compañía otorgará el beneficio previsto cuando el Asegurado sufra una incapacidad que le impida realizar al menos dos de las actividades de la vida diaria consideradas básicas, enumeradas y descritas a continuación, y siempre que el mismo no haya alcanzado la edad máxima de permanencia definida en las Condiciones Particulares.</p>
                <ul className='list-disc pl-6'>
                    <li>Bañarse: lavarse completamente en una bañera o ducha con o sin ayuda.</li>
                    <li>Alimentarse: consumir alimentos preparados o disponibles con o sin utensilios de adaptación.</li>
                    <li>Vestirse: ponerse o sacarse la ropa, abrochar o desabrochar vestimenta.</li>
                    <li>Higienizarse: sentarse en o levantarse del inodoro, mantener higiene personal.</li>
                    <li>Transferirse: sentarse o levantarse de una silla o cama.</li>
                </ul>
                <p>Se considerará al Asegurado incapaz de realizar estas actividades si requiere la asistencia física de otra persona.</p>

                <h3 className='font-bold font-sans text-gray-700'>Artículo 2º - Período de Carencia</h3>
                <p>Se establece un período de carencia de 90 días, contados desde la fecha de inicio de vigencia de la cobertura para cada Asegurado, salvo pacto en contrario en las Condiciones Particulares. Durante este período, no se otorgará ningún beneficio si la incapacidad se inicia.</p>

                <h3 className='font-bold font-sans text-gray-700'>Artículo 3º - Beneficio</h3>
                <p>Una vez comprobada la incapacidad por parte de la auditoría médica de la Compañía, se abonará al Asegurado una renta mensual según lo estipulado en las Condiciones Particulares. La renta mensual se comenzará a abonar desde el primer día siguiente a la finalización del Plazo de Espera establecido en las Condiciones Particulares, siempre que la incapacidad supere la cantidad de días completos y consecutivos previstos en dicho Plazo de Espera, y se pagará mientras dure la referida incapacidad, hasta alcanzar el plazo máximo de pago de beneficio también estipulado en las Condiciones Particulares.</p>
                <p>Las fracciones menores al mes se indemnizarán proporcionalmente a los días del mes correspondiente. Si la incapacidad se origina por la misma causa después de haber recibido el beneficio previamente, se considerará como continuación de la anterior, a menos que haya transcurrido un período de doce meses consecutivos.</p>

                <h3 className='font-bold font-sans text-gray-700'>Artículo 4º - Requisitos para la Validez del Diagnóstico</h3>
                <p>Es indispensable que la incapacidad y la necesidad de asistencia hayan sido diagnosticadas por un profesional médico, y el Asegurado debe informar esta situación a la Compañía dentro de los 5 días del diagnóstico. La Compañía debe recibir un informe escrito por un especialista dentro de los 30 días de la fecha de alta del Asegurado, con el diagnóstico y tratamiento efectuado, junto con la documentación respaldatoria.</p>
                <p>La omisión o demora en la comunicación dará lugar a la pérdida del derecho del Asegurado a percibir el beneficio, salvo en casos de fuerza mayor o imposibilidad sin culpa o negligencia.</p>

                <h3 className='font-bold font-sans text-gray-700'>Artículo 5º - Exclusiones Específicas</h3>
                <ul className='list-disc pl-6'>
                    <li>Maternidad</li>
                    <li>Alteraciones mentales</li>
                    <li>Condiciones médicas preexistentes</li>
                    <li>Intervenciones quirúrgicas, incluso necesarias como consecuencia de enfermedades o accidentes</li>
                    <li>Cura de reposo</li>
                </ul>

                <h3 className='font-bold font-sans text-gray-700'>Artículo 6º - Terminación de la Cobertura</h3>
                <p>La cobertura terminará al diagnosticarse y pagarse el beneficio correspondiente al plazo máximo estipulado en las Condiciones Particulares, o a partir del primer día del mes siguiente en que el Asegurado alcance la edad máxima de permanencia definida en las Condiciones Particulares.</p>
            </div>
            <div>
                <h2 className='text-primary-blue text-base font-varela'>ALTERNATIVA C - COBERTURA RETROACTIVA POR ACCIDENTE</h2>
                <h3 className='font-bold font-sans text-gray-700'>Artículo 1º - Riesgo Cubierto</h3>
                <p>La Compañía otorgará el beneficio previsto cuando el Asegurado sufra una incapacidad que le impida realizar al menos dos de las actividades de la vida diaria consideradas básicas, enumeradas y descritas a continuación, y siempre que el mismo no haya alcanzado la edad máxima de permanencia definida en las Condiciones Particulares.</p>
                <ul className='list-disc pl-6'>
                    <li>Bañarse: lavarse completamente en una bañera o ducha con o sin ayuda.</li>
                    <li>Alimentarse: consumir alimentos preparados o disponibles con o sin utensilios de adaptación.</li>
                    <li>Vestirse: ponerse o sacarse la ropa, abrochar o desabrochar vestimenta.</li>
                    <li>Higienizarse: sentarse en o levantarse del inodoro, mantener higiene personal.</li>
                    <li>Transferirse: sentarse o levantarse de una silla o cama.</li>
                </ul>
                <p>Se considerará al Asegurado incapaz de realizar estas actividades si requiere la asistencia física de otra persona.</p>

                <h3 className='font-bold font-sans text-gray-700'>Artículo 2º - Beneficio</h3>
                <p>Una vez comprobada la incapacidad por parte de la auditoría médica de la Compañía, se abonará al Asegurado una renta mensual según lo estipulado en las Condiciones Particulares. La renta mensual se comenzará a abonar desde el primer día en el que se manifieste la incapacidad, siempre que la misma supere la cantidad de días completos y consecutivos establecidos como Plazo de Espera en las Condiciones Particulares, y se pagará mientras dure la referida incapacidad, hasta alcanzar el plazo máximo de pago de beneficio también estipulado en dichas Condiciones Particulares.</p>
                <p>El período de espera se empezará a contar desde el primer día en el que se configure la incapacidad cubierta. Las fracciones menores al mes se indemnizarán proporcionalmente a los días del mes correspondiente. Si la incapacidad se origina por la misma causa después de haber recibido el beneficio previamente, se considerará como continuación de la anterior, a menos que haya transcurrido un período de doce meses consecutivos.</p>
                <p>La indemnización máxima a la que el Asegurado tendrá derecho será la correspondiente al plazo máximo de pago de beneficio estipulado en Condiciones Particulares. Este beneficio es adicional e independiente de los demás previstos en la póliza.</p>

                <h3 className='font-bold font-sans text-gray-700'>Artículo 4º - Requisitos para la Validez del Diagnóstico</h3>
                <p>Es indispensable que la incapacidad y la necesidad de asistencia hayan sido diagnosticadas por un profesional médico, y el Asegurado debe informar esta situación a la Compañía dentro de los 5 días del diagnóstico. La Compañía debe recibir un informe escrito por un especialista dentro de los 30 días de la fecha de alta del Asegurado, con el diagnóstico y tratamiento efectuado, junto con la documentación respaldatoria.</p>
                <p>La omisión o demora en la comunicación dará lugar a la pérdida del derecho del Asegurado a percibir el beneficio, salvo en casos de fuerza mayor o imposibilidad sin culpa o negligencia. La Compañía puede solicitar al Asegurado información médica adicional que necesite con relación a la indemnización a abonar.</p>

                <h3 className='font-bold font-sans text-gray-700'>Artículo 5º - Exclusiones Específicas</h3>
                <ul className='list-disc pl-6'>
                    <li>Maternidad</li>
                    <li>Alteraciones mentales</li>
                    <li>Condiciones médicas preexistentes</li>
                    <li>Intervenciones quirúrgicas, incluso necesarias como consecuencia de enfermedades o accidentes</li>
                </ul>

                <h3 className='font-bold font-sans text-gray-700'>Artículo 6º - Terminación de la Cobertura</h3>
                <p>La cobertura terminará al diagnosticarse y pagarse el beneficio correspondiente al plazo máximo estipulado en Condiciones Particulares, o a partir del primer día del mes siguiente en que el Asegurado alcance la edad máxima de permanencia definida en las Condiciones Particulares.</p>
            </div>
            <div>
                <h2 className='text-primary-blue text-base font-varela'>ALTERNATIVA D – COBERTURA NO RETROACTIVA POR ACCIDENTE</h2>
                <h3 className='font-bold font-sans text-gray-700'>Artículo 1º - Riesgo Cubierto</h3>
                <p>La Compañía otorgará el beneficio previsto cuando el Asegurado sufra una incapacidad que le impida realizar al menos dos de las actividades de la vida diaria consideradas básicas, enumeradas y descritas a continuación, y siempre que el mismo no haya alcanzado la edad máxima de permanencia definida en las Condiciones Particulares.</p>
                <ul className='list-disc pl-6'>
                    <li>Bañarse: lavarse completamente en una bañera o ducha con o sin ayuda.</li>
                    <li>Alimentarse: consumir alimentos preparados o disponibles con o sin utensilios de adaptación.</li>
                    <li>Vestirse: ponerse o sacarse la ropa, abrochar o desabrochar vestimenta.</li>
                    <li>Higienizarse: sentarse en o levantarse del inodoro, mantener higiene personal.</li>
                    <li>Transferirse: sentarse o levantarse de una silla o cama.</li>
                </ul>
                <p>Se considerará al Asegurado incapaz de realizar estas actividades si requiere la asistencia física de otra persona.</p>

                <h3 className='font-bold font-sans text-gray-700'>Artículo 3º - Beneficio</h3>
                <p>Una vez comprobada la incapacidad por parte de la auditoría médica de la Compañía, se abonará al Asegurado una renta mensual según lo estipulado en las Condiciones Particulares. La renta mensual se comenzará a abonar desde el primer día siguiente a la finalización del Plazo de Espera establecido en las Condiciones Particulares, siempre que la incapacidad supere la cantidad de días completos y consecutivos previstos en dicho Plazo de Espera, y se pagará mientras el Asegurado padezca la referida incapacidad, hasta alcanzar el plazo máximo de pago de beneficio que también se estipula en dichas Condiciones Particulares.</p>
                <p>El período de espera se empezará a contar desde el primer día en el que se manifieste la incapacidad cubierta. Las fracciones menores al mes se indemnizarán proporcionalmente a los días del mes correspondiente. Si la incapacidad se origina por la misma causa después de haber recibido el beneficio previamente, se considerará como continuación de la anterior, a menos que haya transcurrido un período de doce meses consecutivos.</p>
                <p>La indemnización máxima a la que el Asegurado tendrá derecho será la correspondiente al plazo máximo de pago de beneficio estipulado en Condiciones Particulares. Este beneficio es adicional e independiente de los demás previstos en la póliza.</p>

                <h3 className='font-bold font-sans text-gray-700'>Artículo 4º - Requisitos para la Validez del Diagnóstico</h3>
                <p>Es indispensable que la incapacidad y la necesidad de asistencia hayan sido diagnosticadas por un profesional médico, y el Asegurado debe informar esta situación a la Compañía dentro de los 5 días del diagnóstico. La Compañía debe recibir un informe escrito por un especialista dentro de los 30 días de la fecha de alta del Asegurado, con el diagnóstico y tratamiento efectuado, junto con la documentación respaldatoria.</p>
                <p>La omisión o demora en la comunicación dará lugar a la pérdida del derecho del Asegurado a percibir el beneficio, salvo en casos de fuerza mayor o imposibilidad sin culpa o negligencia. La Compañía puede solicitar al Asegurado información médica adicional que necesite con relación a la indemnización a abonar.</p>

                <h3 className='font-bold font-sans text-gray-700'>Artículo 5º - Exclusiones Específicas</h3>
                <ul className='list-disc pl-6'>
                    <li>Maternidad: comprende toda incapacidad que se manifieste durante el embarazo, el parto y hasta dentro de los 45 días después del parto.</li>
                    <li>Alteraciones mentales.</li>
                    <li>Condiciones médicas originadas en enfermedades o accidentes preexistentes.</li>
                    <li>Intervenciones quirúrgicas de cualquier tipo, incluso si son necesarias como consecuencia de enfermedades o accidentes, o del tratamiento de las lesiones por ellos producidas.</li>
                </ul>

                <h3 className='font-bold font-sans text-gray-700'>Artículo 6º - Terminación de la Cobertura</h3>
                <p>La cobertura terminará al diagnosticarse y pagarse el beneficio correspondiente al plazo máximo estipulado en Condiciones Particulares, o a partir del primer día del mes siguiente en que el Asegurado alcance la edad máxima de permanencia definida en las Condiciones Particulares.</p>
            </div>
            <h1 className='text-primary-blue text-xl font-sans font-bold'>CONDICIONES ESPECÍFICAS COBERTURA DE FRACTURA DE HUESOS</h1>
            <div>
                <h3 className='font-bold font-sans text-gray-700'>Artículo 1º - Riesgo Cubierto</h3>
                <p>La Compañía otorgará el beneficio previsto cuando el Asegurado sufra una fractura de huesos como consecuencia inmediata de un Accidente ocurrido durante la vigencia del seguro, y siempre que las consecuencias del Accidente se manifiesten a más tardar dentro de un año a contar de la fecha del mismo.</p>

                <h3 className='font-bold font-sans text-gray-700'>Artículo 2º - Beneficio</h3>
                <p>Una vez comprobada la fractura por parte de la auditoría médica de la Compañía, se abonarán al Asegurado las Sumas Aseguradas indicadas en las Condiciones Particulares para cada una de las siguientes lesiones:</p>
                <ul className='list-disc pl-6'>
                    <li>Cadera, Pelvis, Cuello</li>
                    <li>Cráneo, Omóplato</li>
                    <li>Fémur, Clavícula, Esternón</li>
                    <li>Húmero, Rótula, Codo</li>
                    <li>Antebrazo, Pierna, Mandíbula</li>
                    <li>Muñeca, Malar, Tobillo, Mano, Pie</li>
                    <li>Vértebra, Costilla</li>
                </ul>
                <p>Si como consecuencia de un mismo accidente se produjeran más de una de las fracturas cubiertas, las indemnizaciones se sumarán, con un límite máximo especificado en las Condiciones Particulares. Este beneficio es adicional e independiente de los demás previstos en la póliza.</p>

                <h3 className='font-bold font-sans text-gray-700'>Artículo 3º - Requisitos para la Validez del Diagnóstico</h3>
                <p>Es indispensable que la fractura haya sido diagnosticada por un profesional médico. El Asegurado debe informar directamente a la Compañía cualquier fractura dentro de los 5 días de ocurrida, salvo casos de fuerza mayor o imposibilidad sin culpa o negligencia. La Compañía debe recibir un informe escrito por un especialista con el diagnóstico y tratamiento efectuado dentro de los 30 días de la fecha de la fractura, en formularios provistos por la Compañía y acompañado de documentación respaldatoria. La omisión o demora en la comunicación dará lugar a la pérdida del derecho del Asegurado a percibir el beneficio, salvo en casos de fuerza mayor o imposibilidad sin culpa o negligencia.</p>

                <h3 className='font-bold font-sans text-gray-700'>Artículo 4º - Exclusiones Específicas</h3>
                <p>Quedan excluidas de esta cobertura las roturas de huesos producidas como consecuencia inmediata o mediata de osteoporosis.</p>
            </div>
            <h1 className='text-primary-blue text-xl font-sans font-bold'>CONDICIONES ESPECÍFICAS COBERTURA DE INTERNACIÓN PARA EL RECIÉN NACIDO</h1>
            <div>
                <h2 className='text-primary-blue text-base font-varela'>ALTERNATIVA A – COBERTURA RETROACTIVA</h2>
                <h3 className='font-bold font-sans text-gray-700'>Artículo 1º - Riesgo Cubierto</h3>
                <p>La Compañía otorgará el beneficio previsto cuando se produzca el nacimiento con vida de un hijo del Asegurado Titular, siempre que la madre del mismo esté también Asegurada por esta póliza y el recién nacido deba ser sometido a cualquier tipo de tratamiento médico que demande su internación durante los primeros 30 días de vida. La internación debe haberse realizado en un Establecimiento Asistencial que cumpla con las características definidas en las Condiciones Generales de la póliza.</p>

                <h3 className='font-bold font-sans text-gray-700'>Artículo 2º - Período de Carencia</h3>
                <p>Se establece un período de carencia de 300 días, contado desde la fecha de inicio de vigencia de la cobertura de esta Condición Específica para cada Asegurado. Ningún beneficio se otorgará si el nacimiento del niño ocurre durante dicho plazo de carencia.</p>

                <h3 className='font-bold font-sans text-gray-700'>Artículo 3º - Beneficio</h3>
                <p>La Compañía, luego de comprobar la internación por parte de su auditoría médica, abonará al Asegurado Titular una renta diaria por cada día de internación del recién nacido, cuyo monto variará según el tipo de sala en que tenga lugar la internación. La renta diaria se comenzará a abonar desde el primer día de internación, siempre que la misma supere el Período de Espera establecido en las Condiciones Particulares y no se extenderá más allá de los 30 días desde el nacimiento. Además, se abonará un adicional diario en caso de que el recién nacido requiera asistencia mecánica respiratoria, con un máximo de diez (10) días.</p>
                <p>Si hay nacimientos múltiples, se abonará como máximo el doble de la indemnización diaria prevista, considerando las internaciones en las salas de mayor costo diario.</p>

                <h3 className='font-bold font-sans text-gray-700'>Artículo 4º - Requisitos para la Validez del Diagnóstico</h3>
                <p>Es requisito indispensable para la solicitud del beneficio que la internación haya sido prescripta por un profesional médico. El Asegurado Titular debe informar directamente a la Compañía de cualquier internación dentro de los 5 días de ocurrida. La Compañía debe recibir un informe escrito por un especialista dentro de los 30 días de la fecha de alta del recién nacido, acompañado de documentación respaldatoria. La omisión o demora en la comunicación dará lugar a la pérdida del derecho del Asegurado a percibir el beneficio, salvo en casos de fuerza mayor o imposibilidad sin culpa o negligencia.</p>

                <h3 className='font-bold font-sans text-gray-700'>Artículo 5º - Exclusiones Específicas</h3>
                <p>La Compañía no cubrirá los nacimientos múltiples consecuencia de fertilización asistida y/o estimulación ovárica, ni a los hijos de madre adicta a las drogas.</p>
            </div>
            <div>
                <h2 className='text-primary-blue text-base font-varela'>ALTERNATIVA B – COBERTURA NO RETROACTIVA</h2>
                <h3 className='font-bold font-sans text-gray-700'>Artículo 1º - Riesgo Cubierto</h3>
                <p>La Compañía otorgará el beneficio previsto cuando se produzca el nacimiento con vida de un hijo del Asegurado Titular, siempre que la madre del mismo esté también Asegurada por esta póliza y el recién nacido deba ser sometido a cualquier tipo de tratamiento médico que demande su internación durante los primeros 30 días de vida. La internación debe haberse realizado en un Establecimiento Asistencial que cumpla con las características definidas en las Condiciones Generales de esta póliza.</p>

                <h3 className='font-bold font-sans text-gray-700'>Artículo 2º - Período de Carencia</h3>
                <p>Se establece un período de carencia de 300 días, contado desde la fecha de inicio de vigencia de la cobertura de la presente Condición Específica para cada Asegurado, salvo pacto en contrario previsto en las Condiciones Particulares. Ningún beneficio se otorgará si el nacimiento del niño ocurre durante dicho plazo de carencia.</p>

                <h3 className='font-bold font-sans text-gray-700'>Artículo 3º - Beneficio</h3>
                <p>La Compañía, luego de comprobar la internación por parte de su auditoría médica, abonará al Asegurado Titular una renta diaria por cada día de internación del recién nacido. El monto de dicha renta diaria variará según el tipo de sala en que tenga lugar la internación. La renta diaria se comenzará a abonar desde el día inmediato siguiente a la finalización del Período de Espera establecido en las Condiciones Particulares, cuando la internación supere la cantidad de días completos y consecutivos establecida como Período de Espera, no pudiendo extenderse con posterioridad a la fecha en que el recién nacido cumpla los 30 días desde su alumbramiento. Además, se abonará un adicional diario en caso que la afección del recién nacido requiera la utilización de asistencia mecánica respiratoria, con un máximo de diez (10) días.</p>
                <p>Si hay nacimientos múltiples, se abonará como máximo el doble de la indemnización diaria prevista, considerando las internaciones en las salas de mayor costo diario.</p>

                <h3 className='font-bold font-sans text-gray-700'>Artículo 4º - Requisitos para la Validez del Diagnóstico</h3>
                <p>Es requisito indispensable para la solicitud del beneficio que la internación haya sido prescripta por un profesional médico. El Asegurado Titular debe informar directamente a la Compañía de cualquier internación dentro de los 5 días de haberse efectuado. La Compañía debe recibir un informe escrito por un especialista dentro de los 30 días de la fecha de alta del recién nacido, acompañado de documentación respaldatoria originada en certificaciones, documentos y facturas. La omisión o demora en la comunicación dará lugar a la pérdida del derecho del Asegurado a percibir el beneficio, salvo en casos de fuerza mayor o imposibilidad sin culpa o negligencia.</p>

                <h3 className='font-bold font-sans text-gray-700'>Artículo 5º - Exclusiones Específicas</h3>
                <p>La Compañía no cubrirá los nacimientos múltiples consecuencia de fertilización asistida y/o estimulación ovárica, ni a los hijos de madre adicta a las drogas.</p>
            </div>
            <div>
                <h2 className='text-primary-blue text-base font-varela'>ALTERNATIVA C – COBERTURA RETROACTIVA EN UNIDAD DE TERAPIA INTENSIVA NEONATOLÓGICA</h2>
                <h3 className='font-bold font-sans text-gray-700'>Artículo 1º - Riesgo Cubierto</h3>
                <p>La Compañía otorgará el beneficio previsto cuando se produzca el nacimiento con vida de un hijo del Asegurado Titular, siempre que la madre del mismo esté también Asegurada por esta póliza y el recién nacido deba ser sometido a cualquier tipo de tratamiento médico que demande su internación en Unidad de Terapia Intensiva Neonatológica durante los primeros 30 días de vida. La internación debe haberse realizado en la Unidad de Terapia Intensiva Neonatológica de un Establecimiento Asistencial que cumpla con las características definidas en las Condiciones Generales de esta póliza.</p>

                <h3 className='font-bold font-sans text-gray-700'>Artículo 2º - Período de Carencia</h3>
                <p>Se establece un período de carencia de 300 días, contado desde la fecha de inicio de vigencia de la cobertura de la presente Condición Específica para cada Asegurado, salvo pacto en contrario previsto en las Condiciones Particulares. Ningún beneficio se otorgará si el nacimiento del niño ocurre durante dicho plazo de carencia.</p>

                <h3 className='font-bold font-sans text-gray-700'>Artículo 3º - Beneficio</h3>
                <p>La Compañía, luego de comprobar la internación por parte de su auditoría médica, abonará al Asegurado Titular una renta diaria por cada día de internación del recién nacido. El monto de dicha renta diaria obrará como Capital Asegurado Diario en las Condiciones Particulares. La renta diaria se comenzará a abonar desde el primer día de internación cuando la misma supere la cantidad de días completos y consecutivos establecida como Período de Espera en las Condiciones Particulares, no pudiendo extenderse con posterioridad a la fecha en que el recién nacido cumpla los 30 días desde su alumbramiento. Además, se abonará un adicional diario en caso que la afección del recién nacido requiera la utilización de asistencia mecánica respiratoria, con un máximo de diez (10) días. La internación puede tener lugar en varios Establecimientos Asistenciales en forma alternada, y en caso de nacimientos múltiples, se abonará como máximo el doble de la indemnización diaria prevista.</p>

                <h3 className='font-bold font-sans text-gray-700'>Artículo 4º - Requisitos para la Validez del Diagnóstico</h3>
                <p>Es requisito indispensable para la solicitud del beneficio que la internación haya sido prescripta por un profesional médico. El Asegurado Titular debe informar directamente a la Compañía de cualquier internación en un Establecimiento Asistencial dentro de los 5 días de haberse efectuado. La Compañía debe recibir, dentro de los 30 días de la fecha de alta del recién nacido, un informe escrito por un especialista con el diagnóstico, tratamiento efectuado y cantidad de días de internación, en formularios provistos por la Compañía y acompañado de documentación respaldatoria originada en certificaciones, documentos y facturas. La omisión o la demora en tal comunicación dará lugar a la pérdida del derecho del Asegurado a percibir el beneficio previsto en esta Condición Específica, salvo en los casos de fuerza mayor, caso fortuito o imposibilidad de hecho sin culpa o negligencia.</p>

                <h3 className='font-bold font-sans text-gray-700'>Artículo 5º - Exclusiones Específicas</h3>
                <p>La Compañía no cubrirá los nacimientos múltiples cuando estos sean consecuencia de fertilización asistida y/o estimulación ovárica, ni a los hijos de madre adicta a las drogas.</p>
            </div>
            <div>
                <h2 className='text-primary-blue text-base font-varela'>ALTERNATIVA D – COBERTURA NO RETROACTIVA EN UNIDAD DE TERAPIA INTENSIVA NEONATOLÓGICA</h2>
                <h3 className='font-bold font-sans text-gray-700'>Artículo 1º - Riesgo Cubierto</h3>
                <p>La Compañía otorgará el beneficio previsto cuando se produzca el nacimiento con vida de un hijo del Asegurado Titular, siempre que la madre del mismo esté también Asegurada por esta póliza y el recién nacido deba ser sometido a cualquier tipo de tratamiento médico que demande su internación en Unidad de Terapia Intensiva Neonatológica durante los primeros 30 días de vida. La internación debe haberse realizado en la Unidad de Terapia Intensiva Neonatológica de un Establecimiento Asistencial que cumpla con las características definidas en las Condiciones Generales de esta póliza.</p>

                <h3 className='font-bold font-sans text-gray-700'>Artículo 2º - Período de Carencia</h3>
                <p>Se establece un período de carencia de 300 días, contado desde la fecha de inicio de vigencia de la cobertura de la presente Condición Específica para cada Asegurado, salvo pacto en contrario previsto en las Condiciones Particulares. Ningún beneficio se otorgará si el nacimiento del niño ocurre durante dicho plazo de carencia.</p>

                <h3 className='font-bold font-sans text-gray-700'>Artículo 3º - Beneficio</h3>
                <p>La Compañía, luego de comprobar la internación por parte de su auditoría médica, abonará al Asegurado Titular una renta diaria por cada día de internación del recién nacido. El monto de dicha renta diaria obrará como Capital Asegurado Diario en las Condiciones Particulares. La renta diaria se comenzará a abonar desde el día inmediato siguiente a la finalización del Período de Espera establecido en las Condiciones Particulares, cuando la internación supere la cantidad de días completos y consecutivos establecida como Período de Espera, no pudiendo extenderse con posterioridad a la fecha en que el recién nacido cumpla los 30 días desde su alumbramiento. Además, se abonará un adicional diario en caso que la afección del recién nacido requiera la utilización de asistencia mecánica respiratoria, con un máximo de diez (10) días. La internación puede tener lugar en varios Establecimientos Asistenciales en forma alternada, y en caso de nacimientos múltiples, se abonará como máximo el doble de la indemnización diaria prevista.</p>

                <h3 className='font-bold font-sans text-gray-700'>Artículo 4º - Requisitos para la Validez del Diagnóstico</h3>
                <p>Es requisito indispensable para la solicitud del beneficio que la internación haya sido prescripta por un profesional médico. El Asegurado Titular debe informar directamente a la Compañía de cualquier internación en un Establecimiento Asistencial dentro de los 5 días de haberse efectuado. La Compañía debe recibir, dentro de los 30 días de la fecha de alta del recién nacido, un informe escrito por un especialista con el diagnóstico, tratamiento efectuado y cantidad de días de internación, en formularios provistos por la Compañía y acompañado de documentación respaldatoria originada en certificaciones, documentos y facturas. La omisión o la demora en tal comunicación dará lugar a la pérdida del derecho del Asegurado a percibir el beneficio previsto en esta Condición Específica, salvo en los casos de fuerza mayor, caso fortuito o imposibilidad de hecho sin culpa o negligencia.</p>

                <h3 className='font-bold font-sans text-gray-700'>Artículo 5º - Exclusiones Específicas</h3>
                <p>La Compañía no cubrirá los nacimientos múltiples cuando estos sean consecuencia de fertilización asistida y/o estimulación ovárica, ni a los hijos de madre adicta a las drogas.</p>
            </div>
            <h1 className='text-primary-blue text-xl font-sans font-bold'>CLÁUSULA ADICIONAL A LAS CONDICIONES ESPECÍFICAS DE BENEFICIO EN CASO DE DIAGNÓSTICO DE ENFERMEDADES GRAVES COBERTURA DE DROGAS ONCOLÓGICAS</h1>
            <div>
                <h3 className='font-bold font-sans text-gray-700'>Artículo 1º - Riesgo Cubierto</h3>
                <p>Esta cobertura es adicional y complementa a la cobertura de Diagnóstico de Cáncer prevista en las “Condiciones Específicas – Beneficio en caso de diagnóstico de enfermedades graves”. La Compañía otorgará el beneficio previsto en esta Cláusula Adicional si al Asegurado, al cual se le diagnosticó un cáncer en los términos y condiciones previstos en las Condiciones Específicas señaladas, se le han prescrito drogas oncológicas para el tratamiento de su enfermedad. Para que proceda la cobertura prevista por esta Cláusula Adicional, la cobertura para el Asegurado debe estar vigente en la fecha del diagnóstico del cáncer.</p>

                <h3 className='font-bold font-sans text-gray-700'>Artículo 2º - Período de Carencia</h3>
                <p>Se establece un período de carencia de 60 días, contado desde la fecha de inicio de vigencia de la cobertura de la presente Cláusula Adicional para cada Asegurado, salvo pacto en contrario previsto en las Condiciones Particulares. Ningún beneficio se otorgará si el diagnóstico de la enfermedad ocurre durante este plazo de carencia.</p>

                <h3 className='font-bold font-sans text-gray-700'>Artículo 3º - Beneficio</h3>
                <p>La Compañía, una vez comprobados los requisitos establecidos en el artículo 1º por parte de su auditoría médica, abonará al Asegurado una renta mensual cuyo importe se consigna en las Condiciones Particulares. La renta mensual se comenzará a abonar desde el primer día en el que se le prescriban drogas oncológicas para el tratamiento de la enfermedad amparada por la cobertura de Diagnóstico de Cáncer prevista en las “Condiciones Específicas – Beneficio en caso de diagnóstico de enfermedades graves”, y se abonará solo mientras el Asegurado utilice dichas drogas, hasta alcanzar el plazo máximo de pago de beneficio estipulado en dichas Condiciones Particulares. Las fracciones menores al mes se indemnizarán en forma proporcional a los días del mes correspondiente. La indemnización máxima a la que el Asegurado tendrá derecho para todos los eventos ocurridos durante la vigencia de la póliza será la correspondiente al plazo máximo de pago de beneficio estipulado en Condiciones Particulares. Este beneficio es adicional e independiente de los demás previstos en la póliza.</p>

                <h3 className='font-bold font-sans text-gray-700'>Artículo 4º - Requisitos para la Validez del Diagnóstico</h3>
                <p>A efectos de que proceda la cobertura prevista por esta Cláusula Adicional, el diagnóstico del cáncer debe estar cubierto por la Condición Específica respectiva y, en consecuencia, deben cumplirse todos los requisitos establecidos para la cobertura de Diagnóstico de Cáncer. La Compañía debe recibir, dentro de los 30 días de cumplidos los requisitos establecidos en el artículo 1º de esta Cláusula Adicional, una copia de la orden con la prescripción de las drogas suministradas firmada por un médico oncólogo, y una copia de la hoja de enfermería donde se acredite el efectivo suministro de las drogas, en el caso que el paciente se encuentre internado. En caso de no contar con este último elemento, la Compañía podrá solicitar las facturas originales correspondientes a las drogas suministradas. La omisión o la demora en tal comunicación dará lugar a la pérdida del derecho del Asegurado a percibir el beneficio previsto en esta Cláusula Adicional, salvo en los casos de fuerza mayor, caso fortuito o imposibilidad de hecho sin culpa o negligencia.</p>

                <h3 className='font-bold font-sans text-gray-700'>Artículo 5º - Condiciones Adicionales</h3>
                <p>A efectos de esta cláusula adicional, serán aplicables las restantes condiciones, limitaciones y exclusiones de cobertura establecidas en las “Condiciones Específicas – Beneficio en caso de diagnóstico de enfermedades graves” para la cobertura de diagnóstico de cáncer.</p>
            </div>
            <h1 className='text-primary-blue text-xl font-sans font-bold'>CLÁUSULA ADICIONAL A LAS CONDICIONES ESPECÍFICAS COBERTURA PARA TRASPLANTES DE ÓRGANOS ESTUDIOS DE HISTOCOMPATIBILIDAD PARA TRASPLANTES</h1>
            <div>
                <h3 className='font-bold font-sans text-gray-700'>Artículo 1º - Riesgo Cubierto</h3>
                <p>Esta cobertura es adicional y complementa a la cobertura de Trasplantes prevista en las “Condiciones Específicas – Cobertura para Trasplantes de Órganos”. La Compañía otorgará el beneficio previsto cuando el Asegurado y/o sus potenciales donantes deban ser sometidos a alguno de los estudios detallados en el artículo 2° de esta Cláusula, previos a la realización de un trasplante definido en las Condiciones Generales Específicas de la Cobertura de Trasplante de Órganos y siempre que el mismo se encuentre cubierto de acuerdo a dichas condiciones.</p>

                <h3 className='font-bold font-sans text-gray-700'>Artículo 2º - Definición de los Estudios Cubiertos</h3>
                <p>Los estudios cubiertos por esta Cláusula Adicional serán exclusivamente los estudios previos realizados al Asegurado y/o a los potenciales donantes, siempre que los mismos estén comprendidos dentro de los siguientes:</p>
                <ul className='list-disc pl-8'>
                    <li>21.02.01 Estudio completo de histocompatibilidad para trasplante de órganos hasta 5 personas.</li>
                    <li>21.02.02 Estudio completo de histocompatibilidad para trasplante de órganos por persona.</li>
                    <li>21.02.03 Cross-Match contra panel de linfocitos en receptor de trasplante renal.</li>
                    <li>21.02.04 Cross-Match contra panel de linfocitos en receptor de trasplante renal hiperinmunizado.</li>
                    <li>21.02.05 Cross-Match contra donante vivo en linfocitos T y B en receptor de trasplante renal, en las 48 horas previas al trasplante.</li>
                    <li>21.02.06 Determinación de antígenos DR-DQ en receptor o en donante de trasplante renal o de médula ósea.</li>
                    <li>21.02.07 Cultivo mixto de linfocitos, paso final del trasplante renal o de médula ósea.</li>
                </ul>
                <p>Los estudios de histocompatibilidad deberán ser efectuados conforme a las disposiciones de la Ley de Trasplantes de Órganos, sus modificatorias y reglamentaciones.</p>

                <h3 className='font-bold font-sans text-gray-700'>Artículo 3º - Período de Carencia</h3>
                <p>Se establece un período de carencia de 120 días, contado desde la fecha de inicio de vigencia de la presente Cláusula Adicional para cada Asegurado, salvo pacto en contrario previsto en las Condiciones Particulares. Ningún beneficio se otorgará si la enfermedad origen del trasplante de órganos surge durante este plazo de carencia. El período de carencia no regirá en los casos en que el trasplante sea ocasionado por un accidente ocurrido después de la fecha de inicio de vigencia de la cobertura de la presente Cláusula Adicional para cada Asegurado.</p>

                <h3 className='font-bold font-sans text-gray-700'>Artículo 4º - Beneficio</h3>
                <p>La Compañía, una vez comprobada la realización de los estudios por parte de su auditoría médica, reintegrará al Asegurado los gastos en que este incurra en concepto de estudios de histocompatibilidad previos al trasplante, hasta la cancelación del Límite Indemnizatorio Máximo por Asegurado obrante en las Condiciones Particulares, siendo dicho límite aplicable a todos los estudios relacionados con un mismo trasplante, ya sea que los mismos fueran efectuados a los potenciales donantes como al Asegurado. En ningún caso el monto de cada estudio podrá superar los aranceles de uso habitual en nuestro país para cada uno de dichos estudios. Este beneficio es adicional e independiente de los demás previstos en la póliza.</p>

                <h3 className='font-bold font-sans text-gray-700'>Artículo 5º - Requisitos para la Validez del Diagnóstico</h3>
                <p>A efectos de que proceda la cobertura prevista por la presente Cláusula Adicional, el trasplante para el cual se requieren los estudios de histocompatibilidad debe encontrarse cubierto por la Condición Específica de Trasplante de Órganos y, en consecuencia, deben cumplimentarse todos los requisitos establecidos para la cobertura de Trasplante de Órganos. La Compañía debe contar, dentro de los 15 días de efectuado el estudio, con un informe de un especialista con el motivo del estudio, diagnóstico y tipo de estudio efectuado, acompañado de documentación respaldatoria originada en certificaciones y documentos. La omisión o la demora en tal comunicación dará lugar a la pérdida del derecho del Asegurado a percibir el beneficio previsto en esta Cláusula Adicional, salvo en los casos de fuerza mayor, caso fortuito o imposibilidad de hecho sin culpa o negligencia.</p>

                <h3 className='font-bold font-sans text-gray-700'>Art. 6º - Exclusiones Específicas</h3>
                <p>Quedan excluidos:</p>
                <ol className='list-decimal pl-8'>
                    <li>Pacientes con hemofilia.</li>
                    <li>Trasplantes que no estén específicamente cubiertos por las Condiciones Específicas de la Cobertura de Trasplante de Órganos, siendo aplicables a efectos de la presente Cláusula Adicional las exclusiones y limitaciones en la cobertura establecidas en dichas Condiciones Específicas.</li>
                </ol>
            </div>
        </div>
    )
}

export default CEspeciales
