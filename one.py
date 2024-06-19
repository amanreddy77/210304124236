import requests

# Registration details
registration_payload = {
    "companyName": "Affordmed",
    "ownerName": "Aman Reddy Pundru",
    "rollNo": "210304124236",
    "ownerEmail": "210304124236@paruluniversity.ac.in",
    "accessCode": "QeYQhl"
}

# Registration endpoint
registration_url = "http://20.244.56.144/test/register"

# Send registration request
registration_response = requests.post(registration_url, json=registration_payload)
registration_data = registration_response.json()

# Print registration response
print("Registration Response:")
print(registration_data)

# Obtain authorization token
authorization_payload = {
    "companyName": registration_data["companyName"],
    "clientID": registration_data["clientID"],
    "clientSecret": registration_data["clientSecret"],
    "ownerName": registration_data["ownerName"],
    "ownerEmail": registration_data["ownerEmail"],
    "rollNo": registration_data["rollNo"]
}

# Authorization token endpoint
authorization_url = "http://20.244.56.144/test/auth"

# Send authorization token request
authorization_response = requests.post(authorization_url, json=authorization_payload)
authorization_data = authorization_response.json()

# Print authorization token response
print("\nAuthorization Token Response:")
print(authorization_data)
