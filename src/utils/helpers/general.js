export function serializeObjectToQueryParams(obj) {
    const queryParams = [];
  
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        if (value !== undefined && value !== "") {
          queryParams.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
        }
      }
    }
  
    return queryParams.length ? "?" + queryParams.join("&") : "";
  }