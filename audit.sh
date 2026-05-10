#!/bin/bash

baseUrl="https://gunrazer9.github.io/MarketingWebsite"
apiKey="AIzaSyDyWJqualm-8ZyKnAkkbZSGJzDw5dWNDd8"
outputDir="./lighthouse-reports"

mkdir -p "$outputDir"

pages=(
  "home|/"
  "about|/about"
  "growth-results|/growth-results"
  "services|/services"
  "pricing|/pricing"
  "contact|/contact"
  "privacy-policy|/privacy-policy"
  "cookie-policy|/cookie-policy"
  "terms-conditions|/terms-conditions"
)

echo "Running PageSpeed Insights audits..."

# Initialize summary
echo '{"pages":[' > "$outputDir/SUMMARY.json"
first=true

for page_info in "${pages[@]}"; do
  IFS='|' read -r slug path <<< "$page_info"
  url="${baseUrl}${path}"
  
  echo "📊 Auditing $slug..."
  
  # Mobile audit
  mobile_result=$(curl -s "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=$(echo "$url" | sed 's/ /%20/g')&key=$apiKey&strategy=mobile")
  # Desktop audit  
  desktop_result=$(curl -s "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=$(echo "$url" | sed 's/ /%20/g')&key=$apiKey&strategy=desktop")
  
  if echo "$mobile_result" | grep -q "lighthouseResult"; then
    # Extract scores
    mobile_perf=$(echo "$mobile_result" | grep -o '"performance":{"score":[^}]*' | grep -o '[0-9.]*' | head -1)
    desktop_perf=$(echo "$desktop_result" | grep -o '"performance":{"score":[^}]*' | grep -o '[0-9.]*' | head -1)
    
    mobile_score=$((${mobile_perf%.*} * 100))
    desktop_score=$((${desktop_perf%.*} * 100))
    
    if [ "$first" = false ]; then
      echo "," >> "$outputDir/SUMMARY.json"
    fi
    
    echo "{\"slug\":\"$slug\",\"path\":\"$path\",\"mobile_performance\":$mobile_score,\"desktop_performance\":$desktop_score}" >> "$outputDir/SUMMARY.json"
    first=false
    
    echo "✅ $slug - Mobile: ${mobile_score}% | Desktop: ${desktop_score}%"
  else
    echo "❌ $slug - API error"
  fi
done

echo "]}
" >> "$outputDir/SUMMARY.json"

echo "✅ Audit complete! Results: $outputDir/SUMMARY.json"
