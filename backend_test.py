#!/usr/bin/env python3
"""
Backend API Testing for RhyMerge
Tests all backend endpoints according to test_result.md requirements
"""

import requests
import json
from datetime import datetime
import sys
import os

# Backend URL from frontend/.env
BACKEND_URL = "https://audio-scaffold.preview.emergentagent.com"
API_BASE = f"{BACKEND_URL}/api"

def test_health_check():
    """Test GET /api/ - Health check endpoint"""
    print("\n=== Testing Health Check Endpoint ===")
    try:
        response = requests.get(f"{API_BASE}/")
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get("message") == "Hello World":
                print("✅ Health check endpoint working correctly")
                return True
            else:
                print(f"❌ Unexpected response message: {data}")
                return False
        else:
            print(f"❌ Health check failed with status {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Health check endpoint error: {str(e)}")
        return False

def test_status_endpoints():
    """Test POST /api/status and GET /api/status endpoints"""
    print("\n=== Testing Status Check Endpoints ===")
    
    # Test POST /api/status
    print("\n--- Testing POST /api/status ---")
    try:
        test_data = {"client_name": "RhyMerge_Test_Client"}
        response = requests.post(f"{API_BASE}/status", json=test_data)
        print(f"POST Status Code: {response.status_code}")
        print(f"POST Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if "id" in data and "client_name" in data and "timestamp" in data:
                if data["client_name"] == test_data["client_name"]:
                    print("✅ POST /api/status working correctly")
                    post_success = True
                else:
                    print(f"❌ Client name mismatch in POST response")
                    post_success = False
            else:
                print(f"❌ Missing required fields in POST response")
                post_success = False
        else:
            print(f"❌ POST /api/status failed with status {response.status_code}")
            post_success = False
            
    except Exception as e:
        print(f"❌ POST /api/status error: {str(e)}")
        post_success = False
    
    # Test GET /api/status
    print("\n--- Testing GET /api/status ---")
    try:
        response = requests.get(f"{API_BASE}/status")
        print(f"GET Status Code: {response.status_code}")
        print(f"GET Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if isinstance(data, list):
                print(f"✅ GET /api/status working correctly - returned {len(data)} status checks")
                get_success = True
            else:
                print(f"❌ GET /api/status should return a list, got: {type(data)}")
                get_success = False
        else:
            print(f"❌ GET /api/status failed with status {response.status_code}")
            get_success = False
            
    except Exception as e:
        print(f"❌ GET /api/status error: {str(e)}")
        get_success = False
    
    return post_success and get_success

def test_placeholder_endpoints():
    """Test placeholder endpoints: /api/users, /api/projects, /api/tracks"""
    print("\n=== Testing Placeholder Endpoints ===")
    
    endpoints = [
        ("/users", "User endpoint - coming soon"),
        ("/projects", "Projects endpoint - coming soon"), 
        ("/tracks", "Tracks endpoint - coming soon")
    ]
    
    all_success = True
    
    for endpoint, expected_message in endpoints:
        print(f"\n--- Testing GET /api{endpoint} ---")
        try:
            response = requests.get(f"{API_BASE}{endpoint}")
            print(f"Status Code: {response.status_code}")
            print(f"Response: {response.json()}")
            
            if response.status_code == 200:
                data = response.json()
                if data.get("message") == expected_message:
                    print(f"✅ GET /api{endpoint} working correctly")
                else:
                    print(f"❌ Unexpected message for /api{endpoint}: {data}")
                    all_success = False
            else:
                print(f"❌ GET /api{endpoint} failed with status {response.status_code}")
                all_success = False
                
        except Exception as e:
            print(f"❌ GET /api{endpoint} error: {str(e)}")
            all_success = False
    
    return all_success

def main():
    """Run all backend API tests"""
    print("🚀 Starting RhyMerge Backend API Tests")
    print(f"Backend URL: {BACKEND_URL}")
    print(f"API Base: {API_BASE}")
    
    # Test results
    results = {}
    
    # Run tests
    results['health_check'] = test_health_check()
    results['status_endpoints'] = test_status_endpoints()
    results['placeholder_endpoints'] = test_placeholder_endpoints()
    
    # Summary
    print("\n" + "="*50)
    print("🔍 TEST SUMMARY")
    print("="*50)
    
    total_tests = len(results)
    passed_tests = sum(results.values())
    
    for test_name, passed in results.items():
        status = "✅ PASS" if passed else "❌ FAIL"
        print(f"{test_name.replace('_', ' ').title()}: {status}")
    
    print(f"\nOverall: {passed_tests}/{total_tests} tests passed")
    
    if passed_tests == total_tests:
        print("🎉 All backend API tests passed!")
        return 0
    else:
        print("⚠️  Some backend API tests failed!")
        return 1

if __name__ == "__main__":
    sys.exit(main())