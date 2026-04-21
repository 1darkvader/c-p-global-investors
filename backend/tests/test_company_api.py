import os

import pytest
import requests


# Core public company API endpoints
BASE_URL = os.environ.get("REACT_APP_BACKEND_URL")


@pytest.fixture(scope="module")
def api_base_url():
    if not BASE_URL:
        pytest.skip("REACT_APP_BACKEND_URL is not set")
    return BASE_URL.rstrip("/")


def test_health_endpoint_returns_expected_payload(api_base_url):
    response = requests.get(f"{api_base_url}/api/health", timeout=10)
    assert response.status_code == 200

    data = response.json()
    assert data["status"] == "ok"
    assert data["company"] == "C&P Global Investors"


def test_company_info_endpoint_returns_expected_payload(api_base_url):
    response = requests.get(f"{api_base_url}/api/company-info", timeout=10)
    assert response.status_code == 200

    data = response.json()
    assert data["name"] == "C&P Global Investors"
    assert data["email"] == "info@cpglobalinvestors.capital"
    assert data["location"] == "Fresno, CA 93722"
    assert isinstance(data["focus"], list)
    assert data["focus"] == [
        "Investment consulting",
        "Financial services",
        "Business consulting",
    ]