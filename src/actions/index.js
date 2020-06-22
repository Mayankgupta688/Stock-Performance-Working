import axios from "axios";

export function employeeList(employees) {
    return {
        type: "EMPLOYEE_LIST",
        employees: employees
    }
}

export function companyList(companies) {
    return {
        type: "COMPANY_DETAILS",
        payload: companies
    }
}

export function addToCompanyList(companyData) {
    return {
        type: "ADD_COMPANY",
        payload: companyData
    }
}


export function loadCompanyData() {
    return function(dispatch) {
        // return axios.get("https://9670e73hjj.execute-api.ap-south-1.amazonaws.com/dev/companies").then(response => {
        //     dispatch(companyList(response.data))
        // })

        dispatch(companyList([
            {
                companyName:"Reliance Digital",
                companyDetails: "Best Telecom Company",
                label: "Reliance",
                data: [10, 23, 13, 68, 57, 46, 37, 58,79 , 11,12, 33, 44, 56, 16, 10, 23, 23, 64, 57, 46, 37, 58,19 , 31,12, 33, 64, 16, 46]
            }
        ]))
    }
}

export function addEmployee(employeeData) {
    return {
        type: "ADD_EMPLOYEE",
        employeeData: employeeData
    }
}