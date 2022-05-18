import React, {  useState } from "react";
import MapComponent from "../components/MapComponent";
import { Row, Col, Form, Card, NavLink, Button } from "react-bootstrap";
import { hospitalData } from "../util";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";

const NearByHospital = () => {
  const [hos, setHos] = useState("");
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [hospitalInfo, setHospitalInfo] = useState(null);

  const hospitals = [
    "Ruby Hall Clinic Wanowrie, Maharashtra, India",
    "Fortis Memorial Research Institute, Gurgaon, India",
    "Ahmedabad Civil Hospital, Ahmedabad, Gujarat, India",
    "Aakrithi Hospital, Vijayawada, Andhra Pradesh, India",
    "VOC Port Trust Hospital, Muttayyapuram, Tamil Nadu , India",
    "Vihar Hospital, Anand, Gujarat, India",
    "Advanced Centre for Eyes, Kitchlu Nagar, Ludhiana, Punjab, India",
    "Delhi Heart Hospital, Jagriti Enclave, Anand Vihar, Delhi, India",
    "Nighasan Hospital, Nighasan, Uttar Pradesh, India",
    "Apple Hospital, Surat, Gujarat, India",
    "Primary Health Centre, Gejjalagere, Karnataka, India",
    "32 Smile Stone Dental Clinic, New Delhi, Delhi, India",
    "Veterinary Polyclinic, Hoshiarpur, Punjab, India",
    "Hashmika Child Clinic, Visakhapatnam, Andhra Pradesh, India]",
    "Padmini Nursing Home, Chetpet, Chennai, Tamil Nadu, India",
    "Subham Diagnostic & Polyclinic, Rajhati, West Bengal, India",
    "Smile Art Dental Clinic, Ravet, Pimpri-Chinchwad, Maharashtra, India",
    "Asilo Hospital, Mapusa, Goa, India",
    "General Hospital, Jangipara, Hooghly, West Bangali, India",
    "Western India Institute Of Neurosciences, Nagala Park, Kolhapur, Maharashtra, India",
    "MGM Hospital and Research Center, Katni, Madhya Pradesh, India",
    "Primary Health Care Center, Pataka, Athmallik, Odisha, India",
    "Jyotirmayee Medicine Store, Pataka, Athmallik, Odisha, India",
    "Androbest Andrology & Urology Center, Sai Nagar, LB Nagar, Hyderabad, Telangana, India",
    "ADORN Cosmetic Clinic, Ahmedabad, Gujarat, India",
    "Vignesh Hospital, Porur, Ramapuram, Chennai, Tamil Nadu, India",
    "Chennai Jayanth Acupuncture Hospital, Anna Nagar, Chennai, Tamil Nadu, India",
    "Srinivas Priya Hospital Pvt Ltd, Patel Road, Perambur, Chennai, India",
    "RELAX Hospital, Cuttack, Orrisa, Odisha, India",
    "Governmental Hospital, Bachannapet, Telangana, India",
    "Governmental Hospital of Thalaivasal, Thalaivasal, Tamil Nadu, India",
    "Dr deepa shama's DEEP Hospital, Hathras, Uttar Pradesh, India",
    "Aark Foundation, Donje Phata, Pune, Maharashtra, India",
    "Sant Blood Bank, Jhansi, Uttar Pradesh, India",
    "Riddhi Siddhi CHS, Borivali West, Mumbai, Maharashtra, India",
    "MAURYA Eye Care Center, Manikpur, Uttar Pradesh, India",
    "Dental Panacea, Faridabad, Hayrana, India",
    "Srirangam Government Hospital, Tiruchirappalli, Tamil Nadu, India",
    "Bairabi hospital, Bairabi, Mizoram, India",
    "Khuangpuilam Clinic, Kolasib, Mizoram, India",
    "Nityanand Hospital, Katraj, Pune, Maharashtra, India",
    "Hojai Civil Hospital, Hojai, Assam, India",
    "Apollo BSR Hospital, Bhilai Nagar, Chhattisgarh, India",
    "Usha Vision Care, Srirampura, Bengaluru, Karnataka, India",
    "Keshav Madhav Blood Bank, Bareilly, Uttar Pradesh, India",
    "Mukta Dental Clinic, Shahid Bhagat Singh Nagar, Rajasthan, India",
    "MJM Hospital, Shivajinagar, Pune, Maharashtra, India",
    "Sarthak Manav Kusthashram, Jhotwara, Jaipur, Rajasthan, India",
    "Janta Clinic, Sector 3, Jaipur, Rajasthan, India",
    "Pashu Hospital Maheshwar, Maheshwar, Madhya Pradesh, India",
    "Sagar Hospital, KumaraSwamy layout, Bangalore, Karnataka, India",
    "Dr.Shruthi and Dr.Rajesh Patil, Rajatagiri, Dharwad, Karnataka, India",
    "UHP District General Hospital, Armavti, Maharashtra, India",
    "MGM Hospital, CBD Belapur, Mumbai, Maharashtra, India",
    "Pramathana Dental Care, Ideal Homes TWP, Bengaluru, Karnataka, India",
    "Joshi Hospital, Dabhade, Pune, Maharashtra, India",
    "Rural Hospital Solankur, Solankur, Maharashtra, India",
    "32 Gems Dental Care, Dosarka, Punjab, India",
    "Subham hospital, Mendarda, Sardarbag, Junagadh, Gujarat, India",
    "Hiranandani Hospital, Thane West, Mumbai, Maharashtra",
    "Sadar Hospital, Jamshedpur, India",
    "Fairbank James Friendship memorial Hospital, Ahmednagar, Maharashtra, India",
    "Medicare Skin & Cosmetic Clinic, Jayanagar, Bangalore, India",
    "Banglore Hospital, Bengaluru, Karnataka, India",
    "Indus Hospital, Sector 60, Punjab, India",
    "Raipur, Uttarakhand, India",
    "Tiruvalla Medical Mission Hospital, Thiruvalla, Kerala, India",
  ];

  const handleChange = (selectedOpt) => {
    setHos(selectedOpt[0]);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const filteredHospital = hospitalData.filter(
      (hospital) => hospital.hospitalName === hos
    );
    setLat(filteredHospital[0].Latitude);
    setLng(filteredHospital[0].Longitude);
    setHospitalInfo(filteredHospital[0].hospitalName);
  };

//   useEffect(() => {}, [lat, lng]);

  return (
    <>
      <h2>Search Near By Hospital</h2>
      <Col className="justify-content-md-center inputSym" sm="6" md="6" lg="12">
        <Form onSubmit={onSubmitHandler}>
          <Row>
            <Col lg={10}>
              <Typeahead
                size="sm"
                clearButton
                id="hospitalInput"
                labelKey="name"
                options={hospitals}
                placeholder="Start Typing"
                onChange={(selectedOpt) => handleChange(selectedOpt)}
              />
            </Col>
            <Col>
              <Button
                size="sm"
                style={{ width: "100%", height: "100%" }}
                type="submit"
              >
                Search
              </Button>
            </Col>
          </Row>
        </Form>
      </Col>
      <Row>
        <Col lg={4}>
          <div>
            <div
              className="custom_scrollbar"
              style={{
                height: "60vh",
                overflow: "auto",
              }}
            >
              {hospitalData.map((hospital, i) => (
                <Card
                  key={i}
                  style={{
                    margin: "0 5px 5px 0",
                  }}
                >
                  <NavLink
                    onClick={() => {
                      setLat(hospital.Latitude);
                      setLng(hospital.Longitude);
                      setHospitalInfo(hospital.hospitalName);
                    }}
                  >
                    {hospital.hospitalName}
                  </NavLink>
                </Card>
              ))}
            </div>
          </div>
        </Col>
        <Col>
          <MapComponent
            hospitals={hospitalData}
            lat={lat}
            lng={lng}
            hospitalInfo={hospitalInfo}
          />
        </Col>
      </Row>
    </>
  );
};

export default NearByHospital;
