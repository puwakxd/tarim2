// Backend hazır olmadığı için şimdilik local API kullan
const API_BASE_URL = "/api"

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message)
    this.name = "ApiError"
  }
}

async function fetchApi<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    ...options,
  })

  if (!response.ok) {
    const error = await response.json().catch(() => ({ error: "Network error" }))
    throw new ApiError(response.status, error.error || "Request failed")
  }

  return response.json()
}

export const api = {
  // Contact
  submitContact: (data: any) => fetchApi("/contact", { method: "POST", body: JSON.stringify(data) }),

  // Application
  submitApplication: (data: any) => fetchApi("/application", { method: "POST", body: JSON.stringify(data) }),

  // Verification
  verifyCode: (data: any) => fetchApi("/verification", { method: "POST", body: JSON.stringify(data) }),
}

// Backend hazır olduğunda bu konfigürasyonu kullan
export const backendConfig = {
  // Backend URL'leri - backend hazır olduğunda bu değerleri güncelle
  BACKEND_URL: "http://localhost:8000", // Backend URL'in
  API_SECRET: "your-api-secret", // API secret'ın

  // Headers
  getHeaders: () => ({
    "Content-Type": "application/json",
    Authorization: `Bearer your-api-secret`,
  }),

  // Endpoints
  endpoints: {
    stats: "/api/stats",
    services: "/api/services",
    news: "/api/news",
    branches: "/api/branches",
    products: "/api/products",
    contact: "/api/contact",
    applications: "/api/applications",
    verification: "/api/sms/verify",
  },
}
