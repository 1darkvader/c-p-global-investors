from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(title="C&P Global Investors API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/health")
async def health_check():
    return {"status": "ok", "company": "C&P Global Investors"}


@app.get("/api/company-info")
async def company_info():
    return {
        "name": "C&P Global Investors",
        "email": "info@cpglobalinvestors.capital",
        "location": "Fresno, CA 93722",
        "focus": [
            "Investment consulting",
            "Financial services",
            "Business consulting",
        ],
    }