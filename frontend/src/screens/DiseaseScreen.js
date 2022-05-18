import React, { useState } from 'react';
import {
    Typeahead
} from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import '../css/FormClass.css';
import Button from 'react-bootstrap/Button';
import GetDisease from '../components/GetDisease';



const DiseaseScreen = () => {
    const [sym, setSym] = useState([])
    const [showComponent, setShowComponent] = useState(false)
    const [isMounted, setIsMounted] = useState(false)
    const [toSend, setToSend] = useState('')


    const symptoms = [
        "abdominal_pain",
        "abnormal_menstruation",
        "acidity",
        "acute_liver_failure",
        "altered_sensorium",
        "anxiety",
        "back_pain",
        "belly_pain",
        "blackheads",
        "bladder_discomfort",
        "blister",
        "blood_in_sputum",
        "bloody_stool",
        "blurred_and_distorted_vision",
        "breathlessness",
        "brittle_nails",
        "bruising",
        "burning_micturition",
        "chest_pain",
        "chills",
        "cold_hands_and_feets",
        "coma",
        "congestion",
        "constipation",
        "continuous_feel_of_urine",
        "continuous_sneezing",
        "cough",
        "cramps",
        "dark_urine",
        "dehydration",
        "depression",
        "diarrhoea",
        "dischromic _patches",
        "distention_of_abdomen",
        "dizziness",
        "drying_and_tingling_lips",
        "enlarged_thyroid",
        "excessive_hunger",
        "extra_marital_contacts",
        "family_history",
        "fast_heart_rate",
        "fatigue",
        "fluid_overload",
        "fluid_overload.1",
        "foul_smell_of urine",
        "headache",
        "high_fever",
        "hip_joint_pain",
        "history_of_alcohol_consumption",
        "increased_appetite",
        "indigestion",
        "inflammatory_nails",
        "internal_itching",
        "irregular_sugar_level",
        "irritability",
        "irritation_in_anus",
        "itching",
        "joint_pain",
        "knee_pain",
        "lack_of_concentration",
        "lethargy",
        "loss_of_appetite",
        "loss_of_balance",
        "loss_of_smell",
        "malaise",
        "mild_fever",
        "mood_swings",
        "movement_stiffness",
        "mucoid_sputum",
        "muscle_pain",
        "muscle_wasting",
        "muscle_weakness",
        "nausea",
        "neck_pain",
        "nodal_skin_eruptions",
        "obesity",
        "pain_behind_the_eyes",
        "pain_during_bowel_movements",
        "pain_in_anal_region",
        "painful_walking",
        "palpitations",
        "passage_of_gases",
        "patches_in_throat",
        "phlegm",
        "polyuria",
        "prominent_veins_on_calf",
        "puffy_face_and_eyes",
        "pus_filled_pimples",
        "receiving_blood_transfusion",
        "receiving_unsterile_injections",
        "red_sore_around_nose",
        "red_spots_over_body",
        "redness_of_eyes",
        "restlessness",
        "runny_nose",
        "rusty_sputum",
        "scurring",
        "shivering",
        "silver_like_dusting",
        "sinus_pressure",
        "skin_peeling",
        "skin_rash",
        "slurred_speech",
        "small_dents_in_nails",
        "spinning_movements",
        "spotting_ urination",
        "stiff_neck",
        "stomach_bleeding",
        "stomach_pain",
        "sunken_eyes",
        "sweating",
        "swelled_lymph_nodes",
        "swelling_joints",
        "swelling_of_stomach",
        "swollen_blood_vessels",
        "swollen_extremeties",
        "swollen_legs",
        "throat_irritation",
        "toxic_look_(typhos)",
        "ulcers_on_tongue",
        "unsteadiness",
        "visual_disturbances",
        "vomiting",
        "watering_from_eyes",
        "weakness_in_limbs",
        "weakness_of_one_body_side",
        "weight_gain",
        "weight_loss",
        "yellow_crust_ooze",
        "yellow_urine",
        "yellowing_of_eyes",
        "yellowish_skin"
    ];


    const _onButtonClick = () => {
        setShowComponent(true)
    }

    const Predict = () => {
        setIsMounted(true);
        if (isMounted) {
            setToSend(sym)
        }
        return (
            <>
                {isMounted ? <GetDisease symp={toSend} /> : null}
            </>
        );
    }
    const handleChange = (selectedOpt) => {
        setSym([...sym, ...selectedOpt])

    }

    const SymptomsInput = () => (
        <>
            <Container id='cont'>
                <Row noGutters id="symp-1" className="justify-content-md-center">
                    <Col sm="12" md="12" lg="12">
                        <Form.Label>
                            Choose The Symptoms You Have Been Experiencing Lately
                        </Form.Label>
                    </Col>
                </Row>
                <Row id="symp-2" className="justify-content-md-center">
                    {
                        sym.map(item =>
                            <div>

                                <p style={
                                    { backgroundColor: "#ADD8E6", padding: "3px 5px", borderRadius: 5, color: "black", margin: 3 }
                                } >{item}</p>
                            </div>
                        )
                    }


                </Row>
                <Row id="symp-2" className="justify-content-md-center">

                    <Col className="justify-content-md-center inputSym" sm="6" md="6" lg="10">
                        <Typeahead
                            size="md"
                            clearButton
                            id="SymptomsInput"
                            labelKey="name"
                            multiple
                            options={symptoms}
                            placeholder="Start Typing"
                            onChange={(selectedOpt) => handleChange(selectedOpt)}
                        />
                    </Col>
                    <Col className="justify-content-md-center inputSym" sm="6" md="6" lg="2">
                        <Button type='button'
                            style={{
                                backgroundColor: "#3CA861", /* Green */
                                border: "none",
                                color: "white",
                                textAlign: "center",
                                textDecoration: "none",
                                display: " inline-block",
                            }}
                            onClick={() => {
                                setSym([])
                            }}
                        >CLEAR</Button>
                    </Col>

                </Row>
                <Row id="warn">
                    <Col>
                        Try to choose as much symptoms as possible.
                    </Col>
                </Row>
                <Button onClick={_onButtonClick}  style={{
                                backgroundColor: "#3CA861", /* Green */
                                border: "none",
                                color: "white",
                                textAlign: "center",
                                textDecoration: "none",
                                display: " inline-block",
                            }} id="check">Check!</Button>

                {showComponent ? Predict() : null}

            </Container>



        </>
    )

    return (
        < SymptomsInput />
    );
}


export default DiseaseScreen;