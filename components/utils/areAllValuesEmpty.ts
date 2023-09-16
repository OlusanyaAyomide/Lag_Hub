export function areAllValuesEmpty(obj:any) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
  
        if (typeof value === "object" && !Array.isArray(value)) {
          // Recursive call for nested objects
          if (!areAllValuesEmpty(value)) {
            return false;
          }
        } else if (Array.isArray(value)) {
          // Check each element in the array
          for (const element of value) {
            if (typeof element === "object" && !areAllValuesEmpty(element)) {
              return false;
            } else if (typeof element !== "object" && element !== "") {
              return false;
            }
          }
        } else if (value !== "") {
          return false;
        }
      }
    }
    return true;
  }
  