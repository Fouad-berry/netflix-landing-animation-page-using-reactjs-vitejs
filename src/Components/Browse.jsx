import React from 'react'
import { MyCard } from '../MyCard'
import 'animate.css'
import {Link} from "react-router-dom"

export const Browse = () => {
    return (

    <div className='thebrowse'>
      <div className="animate__animated animate__zoomIn animate__slow">
       <div className='question'>Qui est-ce ?</div> 
        <div className='Start'>
            <Link to="/My_Profile" className='link' style={{ textDecoration: 'none' }}>
            <MyCard image="http://occ-0-6613-55.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABfNXUMVXGhnCZwPI1SghnGpmUgqS_J-owMff-jig42xPF7vozQS1ge5xTgPTzH7ttfNYQXnsYs4vrMBaadh4E6RTJMVepojWqOXx.png?r=1d4"title="first_slide" user="user1" />
            </Link>
            <MyCard image="http://occ-0-6613-55.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229" title="seconde-slide" user="user2" />
            <MyCard image="http://occ-0-6613-55.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdi6oYb6DJb1LndQWckgaXvrqqP3QURNa8Xngiq7wwFwDtWIg1otEuYKVxbYwS9c5clAI1_Bn7DuljwcvhfUzQu2_Y2v9y5P6t_n.png?r=e6e" title="third_slide" user="user3"/>
            <MyCard image="http://occ-0-6613-55.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdz_FjHE_V4uKHq_UBrAJ6ngAth6V0_11STpfqLaA9f1BnVQ6HDjAtTh0TZsriAbNAz_rPg17EhgzoxdCaz-NzO_DlWWQ7zY8c7nfg-fQcU_3R8xVY-HGWcsuV0e-YQ0dMXUhVps5Lm06Xfp73U.png?r=bd7" title="four_slide" user="user4"/>
            <MyCard image="http://occ-0-6613-55.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABez2TdifMt2ez5nbqrSN0l62CFtjhp5AteMBPRKtqNcgyrQIVp3OTJ8Cmb_Usu45SFNDwUSaC65K6RDd6ghcDCosvnf634HEf-QwuQ1UeeePTAlCECzRP-FlJDKvgtels0vvZeY9gTJOlNhlLgo.png?r=147" title="five_slide" user="user5" />
       </div>
      </div>
      </div>

    );
};
