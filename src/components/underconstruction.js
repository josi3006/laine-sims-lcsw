import React from 'react';
import Portrait from "../images/LainePic.jpg"

const UnderConstruction = () => {



    return (

        // <div className="container-fluid justify-content-center align-items-center d-flex text-center">

        <div className="container-fluid">

            <div className="row align-items-center">

                <div className="col"></div>
                <div className="col-md-6">

                    <div className="justify-content-center text-center align-items-center">

                        <p>This website for</p>

                        <h1>Laine Sims, LCSW</h1>

                        <p>is currently under construction.</p>
                    </div>

                    {Portrait}


                    <p>Laine Sims is a Licensed Clinical Social Worker who works with adolescents, adults and families. She has experience and interest in working with individuals and families who are struggling with anxiety, depression, eating disorders, life adjustments, relationship challenges and parenting issues.</p>

                    <p>The goal of her treatment is to guide and support clients through the change process with cognitive behavioral strategies, mindfulness and coping skills.</p>

                </div>

                <div className="col"></div>


            </div>
        </div>

    )
}

export default UnderConstruction;