export const dateDifferencier = (currentDate) => {

    const dateNow = new Date();
    const commingDate = new Date(currentDate);

    if (dateNow.getTime() > commingDate.getTime()) {
        return false
    } else {
        return true;
    }

}
export const hospitalData = [
    , { hospitalName: "Ruby Hall Clinic Wanowrie, Maharashtra, India", Latitude: 18.485870, Longitude: 73.905853 }
    , { hospitalName: "Fortis Memorial Research Institute, Gurgaon, India", Latitude: 28.456789, Longitude: 77.072472 }
    , { hospitalName: "Ahmedabad Civil Hospital, Ahmedabad, Gujarat, India", Latitude: 23.053967, Longitude: 72.603844 }
    , { hospitalName: "Aakrithi Hospital, Vijayawada, Andhra Pradesh, India", Latitude: 16.511965, Longitude: 80.633163 }
    , { hospitalName: "VOC Port Trust Hospital, Muttayyapuram, Tamil Nadu , India", Latitude: 8.749402, Longitude: 78.168137 }
    , { hospitalName: "Vihar Hospital, Anand, Gujarat, India", Latitude: 22.554609, Longitude: 72.967361 }
    , { hospitalName: "Advanced Centre for Eyes, Kitchlu Nagar, Ludhiana, Punjab, India", Latitude: 30.912411, Longitude: 75.819412 }
    , { hospitalName: "Delhi Heart Hospital, Jagriti Enclave, Anand Vihar, Delhi, India", Latitude: 28.653229, Longitude: 77.308601 }
    , { hospitalName: "Nighasan Hospital, Nighasan, Uttar Pradesh, India", Latitude: 28.231674, Longitude: 80.862534 }
    , { hospitalName: "Apple Hospital, Surat, Gujarat, India", Latitude: 21.182947, Longitude: 72.831581 }
    , { hospitalName: "Primary Health Centre, Gejjalagere, Karnataka, India", Latitude: 12.571047, Longitude: 77.001183 }
    , { hospitalName: "32 Smile Stone Dental Clinic, New Delhi, Delhi, India", Latitude: 28.575552, Longitude: 77.262192 }
    , { hospitalName: "Veterinary Polyclinic, Hoshiarpur, Punjab, India", Latitude: 31.524620, Longitude: 75.902008 }
    , { hospitalName: "Hashmika Child Clinic, Visakhapatnam, Andhra Pradesh, India]", Latitude: 17.733288, Longitude: 83.275429 }
    , { hospitalName: "Padmini Nursing Home, Chetpet, Chennai, Tamil Nadu, India", Latitude: 13.072790, Longitude: 80.234421 }
    , { hospitalName: "Subham Diagnostic & Polyclinic, Rajhati, West Bengal, India", Latitude: 22.674788, Longitude: 87.827484 }
    , { hospitalName: "Smile Art Dental Clinic, Ravet, Pimpri-Chinchwad, Maharashtra, India", Latitude: 18.643318, Longitude: 73.756042 }
    , { hospitalName: "Asilo Hospital, Mapusa, Goa, India", Latitude: 15.589379, Longitude: 73.816574 }
    , { hospitalName: "General Hospital, Jangipara, Hooghly, West Bangali, India", Latitude: 22.742229, Longitude: 88.051460 }
    , { hospitalName: "Western India Institute Of Neurosciences, Nagala Park, Kolhapur, Maharashtra, India", Latitude: 16.709822, Longitude: 74.227463 }
    , { hospitalName: "MGM Hospital and Research Center, Katni, Madhya Pradesh, India", Latitude: 23.830975, Longitude: 80.407120 }
    , { hospitalName: "Primary Health Care Center, Pataka, Athmallik, Odisha, India", Latitude: 20.651484, Longitude: 84.629814 }
    , { hospitalName: "Jyotirmayee Medicine Store, Pataka, Athmallik, Odisha, India", Latitude: 20.650694, Longitude: 84.631775 }
    , { hospitalName: "Androbest Andrology & Urology Center, Sai Nagar, LB Nagar, Hyderabad, Telangana, India", Latitude: 17.357861, Longitude: 78.557442 }
    , { hospitalName: "ADORN Cosmetic Clinic, Ahmedabad, Gujarat, India", Latitude: 23.025570, Longitude: 72.527458 }
    , { hospitalName: "Vignesh Hospital, Porur, Ramapuram, Chennai, Tamil Nadu, India", Latitude: 13.030947, Longitude: 80.171585 }
    , { hospitalName: "Chennai Jayanth Acupuncture Hospital, Anna Nagar, Chennai, Tamil Nadu, India", Latitude: 13.095658, Longitude: 80.206116 }
    , { hospitalName: "Srinivas Priya Hospital Pvt Ltd, Patel Road, Perambur, Chennai, India", Latitude: 13.109593, Longitude: 80.246666 }
    , { hospitalName: "RELAX Hospital, Cuttack, Orrisa, Odisha, India", Latitude: 20.457838, Longitude: 85.871536 }
    , { hospitalName: "Governmental Hospital, Bachannapet, Telangana, India", Latitude: 17.786711, Longitude: 79.026970 }
    , { hospitalName: "Governmental Hospital of Thalaivasal, Thalaivasal, Tamil Nadu, India", Latitude: 11.578299, Longitude: 78.753654 }
    , { hospitalName: "Dr deepa shama's DEEP Hospital, Hathras, Uttar Pradesh, India", Latitude: 27.597265, Longitude: 78.045441 }
    , { hospitalName: "Aark Foundation, Donje Phata, Pune, Maharashtra, India", Latitude: 18.399286, Longitude: 73.769058 }
    , { hospitalName: "Sant Blood Bank, Jhansi, Uttar Pradesh, India", Latitude: 25.458599, Longitude: 78.615517 }
    , { hospitalName: "Riddhi Siddhi CHS, Borivali West, Mumbai, Maharashtra, India", Latitude: 19.227650, Longitude: 72.840012 }
    , { hospitalName: "MAURYA Eye Care Center, Manikpur, Uttar Pradesh, India", Latitude: 25.766827, Longitude: 81.414467 }
    , { hospitalName: "Dental Panacea, Faridabad, Hayrana, India", Latitude: 28.386002, Longitude: 77.307678 }
    , { hospitalName: "Srirangam Government Hospital, Tiruchirappalli, Tamil Nadu, India", Latitude: 10.857012, Longitude: 78.691162 }
    , { hospitalName: "Bairabi hospital, Bairabi, Mizoram, India", Latitude: 24.184324, Longitude: 92.533638 }
    , { hospitalName: "Khuangpuilam Clinic, Kolasib, Mizoram, India", Latitude: 24.209656, Longitude: 92.679642 }
    , { hospitalName: "Nityanand Hospital, Katraj, Pune, Maharashtra, India", Latitude: 18.457527, Longitude: 73.867668 }
    , { hospitalName: "Hojai Civil Hospital, Hojai, Assam, India", Latitude: 26.001802, Longitude: 92.848373 }
    , { hospitalName: "Apollo BSR Hospital, Bhilai Nagar, Chhattisgarh, India", Latitude: 21.216276, Longitude: 81.323608 }
    , { hospitalName: "Usha Vision Care, Srirampura, Bengaluru, Karnataka, India", Latitude: 12.996090, Longitude: 77.569672 }
    , { hospitalName: "Keshav Madhav Blood Bank, Bareilly, Uttar Pradesh, India", Latitude: 28.367180, Longitude: 79.430153 }
    , { hospitalName: "Mukta Dental Clinic, Shahid Bhagat Singh Nagar, Rajasthan, India", Latitude: 24.558990, Longitude: 73.722801 }
    , { hospitalName: "MJM Hospital, Shivajinagar, Pune, Maharashtra, India", Latitude: 18.524338, Longitude: 73.843887 }
    , { hospitalName: "Sarthak Manav Kusthashram, Jhotwara, Jaipur, Rajasthan, India", Latitude: 26.940351, Longitude: 75.769493 }
    , { hospitalName: "Janta Clinic, Sector 3, Jaipur, Rajasthan, India", Latitude: 26.889633, Longitude: 75.839554 }
    , { hospitalName: "Pashu Hospital Maheshwar, Maheshwar, Madhya Pradesh, India", Latitude: 22.179298, Longitude: 75.586754 }
    , { hospitalName: "Sagar Hospital, KumaraSwamy layout, Bangalore, Karnataka, India", Latitude: 12.907950, Longitude: 77.565063 }
    , { hospitalName: "Dr.Shruthi and Dr.Rajesh Patil, Rajatagiri, Dharwad, Karnataka, India", Latitude: 15.437003, Longitude: 75.015060 }
    , { hospitalName: "UHP District General Hospital, Armavti, Maharashtra, India", Latitude: 20.933424, Longitude: 77.761139 }
    , { hospitalName: "MGM Hospital, CBD Belapur, Mumbai, Maharashtra, India", Latitude: 19.025806, Longitude: 73.041550 }
    , { hospitalName: "Pramathana Dental Care, Ideal Homes TWP, Bengaluru, Karnataka, India", Latitude: 12.923236, Longitude: 77.518456 }
    , { hospitalName: "Joshi Hospital, Dabhade, Pune, Maharashtra, India", Latitude: 18.970409, Longitude: 76.753838 }
    , { hospitalName: "Rural Hospital Solankur, Solankur, Maharashtra, India", Latitude: 16.413506, Longitude: 74.050575 }
    , { hospitalName: "32 Gems Dental Care, Dosarka, Punjab, India", Latitude: 1.697235, Longitude: 75.788933 }
    , { hospitalName: "Subham hospital, Mendarda, Sardarbag, Junagadh, Gujarat, India", Latitude: 21.323082, Longitude: 70.441826 }
    , { hospitalName: "Hiranandani Hospital, Thane West, Mumbai, Maharashtra", Latitude: 19.252562, Longitude: 72.980057 }
    , { hospitalName: "Sadar Hospital, Jamshedpur, India", Latitude: 22.758537, Longitude: 86.201302 }
    , { hospitalName: "Fairbank James Friendship memorial Hospital, Ahmednagar, Maharashtra, India", Latitude: 19.092508, Longitude: 74.749596 }
    , { hospitalName: "Medicare Skin & Cosmetic Clinic, Jayanagar, Bangalore, India", Latitude: 12.906529, Longitude: 77.585831 }
    , { hospitalName: "Banglore Hospital, Bengaluru, Karnataka, India", Latitude: 13.006752, Longitude: 77.561737 }
    , { hospitalName: "Indus Hospital, Sector 60, Punjab, India", Latitude: 30.705317, Longitude: 76.725052 }
    , { hospitalName: "Raipur, Uttarakhand, India", Latitude: 30.316700, Longitude: 78.099998 },
    { hospitalName: "Tiruvalla Medical Mission Hospital, Thiruvalla, Kerala, India", Latitude: 9.393924, Longitude: 76.578423 }]



    