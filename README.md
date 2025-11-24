# 🌱 Plant Intelligence Hub - Google Colab Version

This repository contains a Google Colab conversion of the React TypeScript Plant Intelligence Hub application.

## 📋 Overview

The Plant Intelligence Hub is an advanced plant monitoring system that provides:

- **Real-time Sensor Monitoring**: Temperature, humidity, soil moisture, and light intensity
- **AI-Powered Analysis**: Plant health assessment and disease detection
- **Image Upload**: Upload plant photos for analysis
- **Historical Trends**: Visualize data over different time periods
- **Gamification**: Track achievements, missions, and compete on leaderboards

## 🚀 Quick Start with Google Colab

### Option 1: Direct Upload to Colab

1. Download the `Plant_Intelligence_Hub.ipynb` notebook from this repository
2. Go to [Google Colab](https://colab.research.google.com/)
3. Click **File → Upload notebook**
4. Select the downloaded `.ipynb` file
5. Click **Runtime → Run all** to execute all cells

### Option 2: Open from GitHub

1. Go to [Google Colab](https://colab.research.google.com/)
2. Click **File → Open notebook**
3. Select the **GitHub** tab
4. Enter the repository URL: `idoo25/cloud_test1`
5. Select `Plant_Intelligence_Hub.ipynb`
6. Click **Runtime → Run all**

### Option 3: Direct Link

Click this badge to open directly in Colab:

[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/idoo25/cloud_test1/blob/main/Plant_Intelligence_Hub.ipynb)

## 📖 How to Use the Notebook

### 1. Initial Setup
- Run the first few cells to install required packages
- All dependencies will be automatically installed

### 2. Sensor Data Visualization
- Interactive gauges show real-time sensor readings
- View current temperature, humidity, soil moisture, and light intensity

### 3. Historical Data Analysis
- Use the dropdown menu to select time periods (day, week, month, quarter)
- Interactive charts allow zooming, panning, and hovering for details

### 4. Plant Image Upload
- Click the "Upload Plant Image" button
- Select a plant photo from your device
- Image will be displayed for analysis

### 5. AI Analysis
- Automatic health score calculation
- Disease detection results
- Water stress assessment
- Pest identification
- Care recommendations

### 6. Gamification Dashboard
- View your progress and rank
- Track daily missions
- Unlock achievements
- Check the leaderboard

## 🎨 Features

### ✅ Implemented Features

- **Interactive Visualizations**: All charts are interactive using Plotly
- **Sensor Monitoring**: Real-time display with gauge charts
- **Image Upload**: Native Colab file upload integration
- **AI Analysis**: Simulated ML-based plant health assessment
- **Historical Charts**: Multi-period time series visualization
- **Gamification**: Progress tracking, achievements, leaderboard
- **Responsive Design**: Works on mobile and desktop browsers

### 🔄 Differences from Original React App

| Feature | React App | Colab Notebook |
|---------|-----------|----------------|
| UI Framework | React + TypeScript | Python + Plotly + ipywidgets |
| Styling | TailwindCSS | Plotly themes |
| Interactivity | Browser events | Jupyter widgets |
| Data Storage | State management | DataFrame/variables |
| Deployment | Web hosting | Google Colab |

## 📚 Libraries Used

- **plotly**: Interactive visualizations
- **pandas**: Data manipulation
- **numpy**: Numerical computations
- **matplotlib**: Additional plotting
- **seaborn**: Statistical visualizations
- **Pillow**: Image processing
- **ipywidgets**: Interactive UI components

## 🔧 Customization

### Adding Real Sensor Data

Replace the simulated data generation with real sensor readings:

```python
def get_real_sensor_data():
    # Connect to your IoT device/API
    data = your_sensor_api.get_latest_readings()
    return data
```

### Integrating Real AI Models

Replace mock AI analysis with actual ML models:

```python
from tensorflow import keras

model = keras.models.load_model('plant_disease_model.h5')

def analyze_plant_image(image):
    predictions = model.predict(image)
    return predictions
```

### Custom Time Periods

Modify the `generate_sensor_data()` function to use different time ranges:

```python
# 6 months of data
sensor_df = generate_sensor_data(hours=24*180)
```

## 📊 Sample Data

The notebook generates realistic sample data for demonstration:

- **Temperature**: 20-30°C with daily cycles
- **Humidity**: 50-80% with variations
- **Soil Moisture**: Gradually decreasing (simulating water consumption)
- **Light Intensity**: 0-2000 lux with day/night cycles

## 🐛 Troubleshooting

### Issue: Packages not installing
**Solution**: Restart runtime and run installation cell again

### Issue: Images not uploading
**Solution**: Ensure you're using Chrome/Firefox and have granted file access permissions

### Issue: Visualizations not displaying
**Solution**: Check that you have internet connection (Plotly requires CDN access)

### Issue: Widgets not interactive
**Solution**: Make sure ipywidgets is properly installed and enabled

## 🚀 Advanced Usage

### Batch Processing Multiple Images

```python
for filename in uploaded_files:
    img = Image.open(filename)
    result = analyze_plant_health(img)
    print(f"Analysis for {filename}: {result}")
```

### Exporting Data

```python
# Export sensor data to CSV
sensor_df.to_csv('sensor_data.csv', index=False)

# Download from Colab
from google.colab import files
files.download('sensor_data.csv')
```

### Scheduling Regular Updates

```python
import time

while True:
    # Fetch new sensor data
    new_data = get_real_sensor_data()
    # Update visualizations
    create_sensor_cards()
    # Wait 5 minutes
    time.sleep(300)
```

## 📝 Notes

- **Data Persistence**: Data is stored in notebook session and will be lost when runtime is disconnected
- **Performance**: Large datasets may require GPU runtime for faster processing
- **Privacy**: Uploaded images are processed locally in the Colab environment
- **Limitations**: Some React-specific features (like real-time animations) are adapted for notebook environment

## 🤝 Contributing

To improve this notebook:

1. Fork the repository
2. Make your changes to the `.ipynb` file
3. Test in Google Colab
4. Submit a pull request

## 📄 License

This project maintains the same license as the original repository.

## 🔗 Resources

- [Google Colab Documentation](https://colab.research.google.com/notebooks/intro.ipynb)
- [Plotly Python Documentation](https://plotly.com/python/)
- [ipywidgets Documentation](https://ipywidgets.readthedocs.io/)
- [Original React App](./App.tsx)

## 💡 Tips for Best Experience

1. **Use Chrome or Firefox** for best compatibility
2. **Enable GPU** (Runtime → Change runtime type → GPU) for faster processing
3. **Save a copy** (File → Save a copy in Drive) to preserve your work
4. **Connect to Drive** if you want to persist data across sessions
5. **Use headings** to navigate large notebooks easily

## 🎯 Future Enhancements

Potential improvements for future versions:

- [ ] Real-time data streaming from IoT sensors
- [ ] Integration with actual ML models for disease detection
- [ ] Database storage for historical data
- [ ] Email/SMS alerts for critical conditions
- [ ] Multi-plant monitoring
- [ ] Weather API integration
- [ ] Export to PDF reports
- [ ] Mobile app integration

---

**Made with ❤️ for plant lovers and data enthusiasts!**

For questions or issues, please open an issue in the repository.
