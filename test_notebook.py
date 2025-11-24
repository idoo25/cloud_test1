"""
Test script to validate Google Colab notebook code
This script tests key components without requiring Colab environment
"""

import sys
import json

def test_notebook_structure():
    """Test that the notebook has valid structure"""
    print("Testing notebook structure...")
    
    with open('Plant_Intelligence_Hub.ipynb', 'r') as f:
        notebook = json.load(f)
    
    # Validate basic structure
    assert 'cells' in notebook, "Notebook missing 'cells'"
    assert 'metadata' in notebook, "Notebook missing 'metadata'"
    assert 'nbformat' in notebook, "Notebook missing 'nbformat'"
    
    cells = notebook['cells']
    assert len(cells) > 0, "Notebook has no cells"
    
    # Count cell types
    markdown_cells = sum(1 for cell in cells if cell['cell_type'] == 'markdown')
    code_cells = sum(1 for cell in cells if cell['cell_type'] == 'code')
    
    print(f"✅ Valid notebook structure")
    print(f"   - Total cells: {len(cells)}")
    print(f"   - Markdown cells: {markdown_cells}")
    print(f"   - Code cells: {code_cells}")
    
    return True

def test_cell_content():
    """Test that cells contain expected content"""
    print("\nTesting cell content...")
    
    with open('Plant_Intelligence_Hub.ipynb', 'r') as f:
        notebook = json.load(f)
    
    cells = notebook['cells']
    
    # Expected keywords in the notebook
    expected_features = [
        'plotly',           # Visualization library
        'pandas',           # Data manipulation
        'sensor',           # Sensor data
        'temperature',      # Temperature monitoring
        'humidity',         # Humidity monitoring
        'soil_moisture',    # Soil moisture
        'light_intensity',  # Light monitoring
        'analyze',          # AI analysis
        'gamification',     # Gamification features
        'upload',           # Image upload
        'health_score',     # Health scoring
    ]
    
    # Combine all code from notebook
    all_code = ' '.join([
        ' '.join(cell['source']) 
        for cell in cells 
        if cell['cell_type'] == 'code'
    ])
    
    missing_features = []
    for feature in expected_features:
        if feature not in all_code.lower():
            missing_features.append(feature)
    
    if missing_features:
        print(f"⚠️  Missing expected features: {', '.join(missing_features)}")
    else:
        print(f"✅ All expected features present")
    
    return len(missing_features) == 0

def test_imports():
    """Test that key imports are present"""
    print("\nTesting required imports...")
    
    with open('Plant_Intelligence_Hub.ipynb', 'r') as f:
        notebook = json.load(f)
    
    cells = notebook['cells']
    code_cells = [cell for cell in cells if cell['cell_type'] == 'code']
    
    required_imports = [
        'numpy',
        'pandas',
        'matplotlib',
        'plotly',
        'PIL',
        'IPython',
    ]
    
    # Find import cell
    import_code = ''
    for cell in code_cells:
        cell_source = ' '.join(cell['source'])
        if 'import numpy' in cell_source or 'import pandas' in cell_source:
            import_code = cell_source
            break
    
    missing_imports = []
    for imp in required_imports:
        if imp not in import_code:
            missing_imports.append(imp)
    
    if missing_imports:
        print(f"⚠️  Missing imports: {', '.join(missing_imports)}")
    else:
        print(f"✅ All required imports present")
    
    return len(missing_imports) == 0

def test_functions():
    """Test that key functions are defined"""
    print("\nTesting function definitions...")
    
    with open('Plant_Intelligence_Hub.ipynb', 'r') as f:
        notebook = json.load(f)
    
    cells = notebook['cells']
    all_code = '\n'.join([
        '\n'.join(cell['source']) 
        for cell in cells 
        if cell['cell_type'] == 'code'
    ])
    
    required_functions = [
        'generate_sensor_data',
        'create_sensor_cards',
        'plot_historical_data',
        'upload_plant_image',
        'analyze_plant_health',
        'create_gamification_dashboard',
    ]
    
    missing_functions = []
    for func in required_functions:
        if f"def {func}" not in all_code:
            missing_functions.append(func)
    
    if missing_functions:
        print(f"⚠️  Missing functions: {', '.join(missing_functions)}")
    else:
        print(f"✅ All required functions defined")
    
    return len(missing_functions) == 0

def test_documentation():
    """Test that documentation is adequate"""
    print("\nTesting documentation...")
    
    with open('Plant_Intelligence_Hub.ipynb', 'r') as f:
        notebook = json.load(f)
    
    cells = notebook['cells']
    markdown_cells = [cell for cell in cells if cell['cell_type'] == 'markdown']
    
    # Check for key sections
    all_markdown = ' '.join([
        ' '.join(cell['source'])
        for cell in markdown_cells
    ])
    
    required_sections = [
        'Setup',
        'Sensor',
        'Historical',
        'Upload',
        'AI Analysis',
        'Gamification',
        'Usage',
    ]
    
    missing_sections = []
    for section in required_sections:
        if section not in all_markdown:
            missing_sections.append(section)
    
    if missing_sections:
        print(f"⚠️  Missing documentation sections: {', '.join(missing_sections)}")
    else:
        print(f"✅ All documentation sections present")
    
    print(f"   - Total markdown cells: {len(markdown_cells)}")
    
    return len(missing_sections) == 0

def test_readme():
    """Test README.md exists and has content"""
    print("\nTesting README.md...")
    
    try:
        with open('README.md', 'r') as f:
            readme = f.read()
        
        required_content = [
            'Google Colab',
            'Quick Start',
            'Features',
            'Usage',
            'Installation',
        ]
        
        missing_content = []
        for content in required_content:
            if content not in readme:
                missing_content.append(content)
        
        if missing_content:
            print(f"⚠️  README missing content: {', '.join(missing_content)}")
        else:
            print(f"✅ README has all required content")
        
        print(f"   - README size: {len(readme)} characters")
        
        return len(missing_content) == 0
    except FileNotFoundError:
        print("❌ README.md not found")
        return False

def test_conversion_guide():
    """Test CONVERSION_GUIDE.md exists and has content"""
    print("\nTesting CONVERSION_GUIDE.md...")
    
    try:
        with open('CONVERSION_GUIDE.md', 'r') as f:
            guide = f.read()
        
        required_content = [
            'React',
            'Python',
            'Colab',
            'conversion',
            'mapping',
        ]
        
        missing_content = []
        for content in required_content:
            if content.lower() not in guide.lower():
                missing_content.append(content)
        
        if missing_content:
            print(f"⚠️  Conversion guide missing content: {', '.join(missing_content)}")
        else:
            print(f"✅ Conversion guide has all required content")
        
        print(f"   - Guide size: {len(guide)} characters")
        
        return len(missing_content) == 0
    except FileNotFoundError:
        print("❌ CONVERSION_GUIDE.md not found")
        return False

def main():
    """Run all tests"""
    print("=" * 60)
    print("🧪 Running Google Colab Notebook Validation Tests")
    print("=" * 60)
    
    tests = [
        test_notebook_structure,
        test_cell_content,
        test_imports,
        test_functions,
        test_documentation,
        test_readme,
        test_conversion_guide,
    ]
    
    results = []
    for test in tests:
        try:
            result = test()
            results.append(result)
        except Exception as e:
            print(f"❌ Test failed with error: {e}")
            results.append(False)
    
    print("\n" + "=" * 60)
    print("📊 Test Results Summary")
    print("=" * 60)
    
    passed = sum(results)
    total = len(results)
    
    print(f"Tests passed: {passed}/{total}")
    
    if passed == total:
        print("\n🎉 All tests passed! Notebook is ready for Google Colab.")
        return 0
    else:
        print(f"\n⚠️  {total - passed} test(s) failed. Please review the issues above.")
        return 1

if __name__ == '__main__':
    sys.exit(main())
