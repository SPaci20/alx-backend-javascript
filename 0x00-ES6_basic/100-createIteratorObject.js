export default function createIteratorObject(report) {
  const iterator = {
    departments: Object.keys(report),
    employees: {},
    currentDepartmentIndex: 0,
    currentEmployeeIndex: 0,

    next() {
      const currentDepartment = this.departments[this.currentDepartmentIndex];

      if (!currentDepartment) {
        return { done: true };
      }

      const currentEmployees = this.employees[currentDepartment];

      if (!currentEmployees) {
        this.employees[currentDepartment] = Object.values(report[currentDepartment]);
      }

      const currentEmployee = this.employees[currentDepartment][this.currentEmployeeIndex];

      if (this.currentEmployeeIndex < currentEmployees.length - 1) {
        this.currentEmployeeIndex++;
      } else {
        this.currentEmployeeIndex = 0;
        this.currentDepartmentIndex++;
      }

      return { value: currentEmployee, done: false };
    },
  };

  iterator[Symbol.iterator] = function () {
    return this;
  };

  return iterator;
}
