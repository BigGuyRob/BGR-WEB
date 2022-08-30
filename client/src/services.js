
import './App.css';
function Servicesblock(props){
    return(
        <div className="Serviceblock" id ="ServiceBlock" style={{height:props.height}}>
            <div class="container py-4 py-xl-5">
        <div class="row mb-5">
            <div class="col-md-8 col-xl-6 text-center mx-auto">
                <h2>My Services</h2>
                <p class="w-lg-50"></p>
            </div>
        </div>
        <div class="row gy-4 gy-xl-0 row-cols-1 row-cols-md-2 row-cols-xl-3 d-xl-flex align-items-xl-center gutter-y">
            <div class="col">
                <div class="card">
                    <div class="card-body text-center p-4">
                        <h6 class="text-uppercase text-muted card-subtitle">Consulting &amp; Tutoring</h6>
                        <h4 class="display-4 fw-bold card-title">$15</h4>
                    </div>
                    <div class="card-footer p-4">
                        <div>
                            <ul class="list-unstyled">
                                <li class="d-flex mb-2"><span class="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="rgb(48,107,107)" viewBox="0 0 16 16" class="bi bi-check-lg">
                                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                                        </svg></span><span>1 Hour Live Tutoring</span></li>
                                <li class="d-flex mb-2"><span class="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="rgb(48,107,107)" viewBox="0 0 16 16" class="bi bi-check-lg">
                                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                                        </svg></span><span>Access To Rob's Notes and Resources</span></li>
                                <li class="d-flex mb-2"><span class="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="rgb(48,107,107)" viewBox="0 0 16 16" class="bi bi-check-lg">
                                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                                        </svg></span><span>Project Planning</span></li>
                                <li class="d-flex mb-2"><span class="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="rgb(48,107,107)" viewBox="0 0 16 16" class="bi bi-check-lg">
                                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                                </svg></span><span>College Preparation</span></li>
                                <li class="d-flex mb-2"><span class="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="rgb(48,107,107)" viewBox="0 0 16 16" class="bi bi-check-lg">
                                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                                </svg></span><span>Essay Proofreading</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card border-2" style={{borderStyle:"rgb(48,157,107)"}}>
                    <div class="card-body text-center p-4">
                        <h6 class="text-uppercase text-muted card-subtitle">Development</h6>
                        <h4 class="display-4 fw-bold card-title">$35/hr</h4>
                    </div>
                    <div class="card-footer p-4">
                        <div>
                            <ul class="list-unstyled">
                                <li class="d-flex mb-2"><span class="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="rgb(48,107,107)" viewBox="0 0 16 16" class="bi bi-check-lg">
                                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                                        </svg></span><span>Full Stack Web Development</span></li>
                                <li class="d-flex mb-2"><span class="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="rgb(48,107,107)" viewBox="0 0 16 16" class="bi bi-check-lg">
                                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                                        </svg></span><span>Hardware Computing Solutions</span></li>
                                <li class="d-flex mb-2"><span class="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="rgb(48,107,107)" viewBox="0 0 16 16" class="bi bi-check-lg">
                                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                                        </svg></span><span>IT Office Equipment Installation</span></li>
                                <li class="d-flex mb-2"><span class="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="rgb(48,107,107)" viewBox="0 0 16 16" class="bi bi-check-lg">
                                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                                </svg></span><span>Home IOT Installation</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <div class="card-body text-center p-4">
                        <h6 class="text-uppercase text-muted card-subtitle">PC assembly</h6>
                        <h4 class="display-4 fw-bold card-title">$150</h4>
                    </div>
                    <div class="card-footer p-4">
                        <div>
                            <ul class="list-unstyled">
                                <li class="d-flex mb-2"><span class="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="rgb(48,107,107)" viewBox="0 0 16 16" class="bi bi-check-lg">
                                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                                        </svg></span><span>Source Hardware Components</span></li>
                                <li class="d-flex mb-2"><span class="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="rgb(48,107,107)" viewBox="0 0 16 16" class="bi bi-check-lg">
                                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                                        </svg></span><span>Ensure Proper Assembly</span></li>
                                <li class="d-flex mb-2"><span class="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="rgb(48,107,107)" viewBox="0 0 16 16" class="bi bi-check-lg">
                                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                                        </svg></span><span>Perform Setup and Driver Installation</span></li>
                                <li class="d-flex mb-2"><span class="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="rgb(48,107,107)" viewBox="0 0 16 16" class="bi bi-check-lg">
                                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                                </svg></span><span>Deliver Benchmarking Reports</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col"><div class="dropdown"><button class="btn btn-primary dropdown-toggle" style={{background:"rgb(48,107,107)"}}aria-expanded="false" data-bs-toggle="dropdown" type="button">See Courses </button>
        <div class="dropdown-menu">
            <a class="dropdown-item"><iframe  src="./images/CoursesAndSyllabi.pdf#Fit"></iframe></a>
            </div>
    </div></div>
        </div>
    </div>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
        </div>
    )

    function helper(){
    
    }
}

export default Servicesblock;