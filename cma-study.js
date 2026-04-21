const cmaCourseMap = {
  Foundation: {
    label: "Foundation",
    unavailableMessage: "Available soon.",
    groups: []
  },
  Intermediate: {
    label: "Intermediate",
    groups: [
      {
        label: "Group-1",
        subjects: [
          {
            label: "Business Law and Ethics",
            questions: []
          },
          {
            label: "Financial Accounting",
            questions: [
              {
                question: "Which accounting concept assumes that a business will continue operating for the foreseeable future?",
                options: ["Going concern", "Matching", "Consistency", "Materiality"],
                answer: 0,
                explanation: "The going concern concept assumes the entity will continue operations and will not be forced to liquidate soon."
              },
              {
                question: "Which statement shows assets, liabilities, and owner's equity on a particular date?",
                options: ["Cash flow statement", "Balance sheet", "Trial balance", "Income statement"],
                answer: 1,
                explanation: "A balance sheet presents the financial position of an entity at a specific point in time."
              },
              {
                question: "Depreciation is charged mainly to apply which accounting principle?",
                options: ["Dual aspect", "Matching", "Conservatism", "Full disclosure"],
                answer: 1,
                explanation: "Depreciation matches the cost of a fixed asset with the revenue earned across its useful life."
              },
              {
                question: "Which of the following is not a current asset?",
                options: ["Cash", "Accounts receivable", "Inventory", "Land"],
                answer: 3,
                explanation: "Land is a non-current asset because it is not expected to be converted into cash within a year."
              }
            ]
          },
          {
            label: "DT & IDT",
            questions: [
              {
                question: "GST input tax credit is generally available when goods or services are used for what purpose?",
                options: ["Personal use", "Business purposes", "Exempt supplies only", "Non-taxable supplies only"],
                answer: 1,
                explanation: "Input tax credit is generally linked to goods or services used in the course or furtherance of business."
              },
              {
                question: "TDS stands for which term?",
                options: ["Tax Deducted at Source", "Tax Deposit Statement", "Total Direct Savings", "Tax Due Summary"],
                answer: 0,
                explanation: "TDS means Tax Deducted at Source, where tax is deducted before making specified payments."
              },
              {
                question: "Which document is commonly used as proof of income tax return filing in India?",
                options: ["Form 16 only", "ITR acknowledgement", "GST invoice", "PAN application"],
                answer: 1,
                explanation: "The ITR acknowledgement confirms that an income tax return has been filed."
              }
            ]
          },
          {
            label: "Cost Accounting",
            questions: [
              {
                question: "Prime cost is equal to which combination?",
                options: ["Direct material plus direct labour plus direct expenses", "Factory cost plus office overhead", "Sales minus profit", "Indirect material plus indirect labour"],
                answer: 0,
                explanation: "Prime cost includes direct material, direct labour, and direct expenses."
              },
              {
                question: "Which cost changes in total with the level of production?",
                options: ["Fixed cost", "Variable cost", "Sunk cost", "Committed cost"],
                answer: 1,
                explanation: "Variable cost changes in total when output changes, though it often remains constant per unit."
              },
              {
                question: "EOQ is used to determine the optimum level of what?",
                options: ["Selling price", "Order quantity", "Machine hours", "Labour turnover"],
                answer: 1,
                explanation: "Economic Order Quantity helps identify an order size that balances ordering and carrying costs."
              }
            ]
          }
        ]
      },
      {
        label: "Group-2",
        subjects: [
          {
            label: "OM & SM",
            questions: [
    {
        "question": "OM deals with -",
        "options": [
            "both tangible and intangible product",
            "tangible product",
            "intangible services",
            "tangible product and intangible services"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "One of the example of pure service :",
        "options": [
            "teaching",
            "product service",
            "repairing service",
            "All of the above"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Objectives of operations management can be categorized into :",
        "options": [
            "two",
            "three",
            "four",
            "seven"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "One of the objective of operation management is",
        "options": [
            "product service",
            "Customer service",
            "planning",
            "None of them"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Principal function of customer service are",
        "options": [
            "manufacture-supply-transport-service",
            "manufacture-transport-service-supply",
            "mafucture- service-transport- supply",
            "manufacture-transport-supply-service"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "The desired objective of Production and Operations Management is:",
        "options": [
            "Use cheap machinery to produce",
            "To train unskilled workers to manufacture goods perfectly",
            "Optimal utilisation of available resources",
            "To earn good profits."
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which one of the following is not an activity under productions and operations management?",
        "options": [
            "Location of facilities",
            "Plant layouts and Material Handling;",
            "Product Design;",
            "Market penetration;"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Operations management is concerned essentially with the utilization of resources. Utilisation of resources means",
        "options": [
            "Obtaining maximum effect from resources",
            "Minimising loss of resources,",
            "Minimising underutilisation or waste of resources",
            "All the above"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Which one of the following is not an objective of Operations Management?",
        "options": [
            "To satisfy customers by providing right thing at the right place at the right time",
            "To satisfy customers by providing right thing at the right price at the right time",
            "To satisfy customers by providing right thing at the right price at right quality",
            "To satisfy customers by providing right thing with right design with desired features"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Productions and Operations Management distinguishes itself from other functions such as personnel, marketing, finance, etc. mainly by its primary concern:",
        "options": [
            "Conversion by using intellectual properties of a concern;",
            "Conversion by using physical resources",
            "Conversion by using services provided by other functions",
            "Conversion by using machineries"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Four dimensions of competitiveness that measure the effectiveness of the operations function are",
        "options": [
            "Cost, Quality, Dependability as a supplier, Flexibility",
            "Price, worth, Dependability as a supplier, Productivity",
            "Quantity, Quality, Price, Worth",
            "Cost, Quality, Quantity, Price"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Generally the size of the order for production in Job production is:",
        "options": [
            "Small",
            "Large",
            "Medium",
            "Very large"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "The desired objective of Production and Operations Management is:",
        "options": [
            "Use cheap machinery to produce",
            "To train unskilled workers to manufacture goods perfectly",
            "Optimal utilisation of available resources",
            "To earn good profits."
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "To decide work load for men and machines:",
        "options": [
            "Medium range forecasting is used",
            "Short term forecasting is used",
            "Long range forecasting is used",
            "A combination of long range and medium range forecasting is used."
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "The act of assessing the future and make provisions for it is known as",
        "options": [
            "Planning",
            "Forecasting",
            "Assessment",
            "Scheduling"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "The time horizon selected for forecasting depends on:",
        "options": [
            "The salability of the product",
            "The selling capacity of Salesman",
            "Purpose for which forecast is made",
            "Time required for production cycle"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Important factor in forecasting production is:",
        "options": [
            "Environmental changes",
            "Available capacity of machines",
            "Disposable income of the consumer",
            "Changes in the preference of the consumer."
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Application of technology or process to the raw material to add use value is known as:",
        "options": [
            "Product",
            "Production",
            "Application of technology",
            "Combination of technology and process."
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "In Production by disintegration the material undergoes:",
        "options": [
            "Change in economic value only",
            "Change in physical and chemical characteristics",
            "Change in technology only",
            "None of the above"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Use of any process or procedure designed to transform a set of input elements into a set of output elements is known as:",
        "options": [
            "Transformation process",
            "Transformation of input to output",
            "Production",
            "Technology change."
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Conversion of inputs into outputs is known as:",
        "options": [
            "Application of technology",
            "Operations management",
            "Manufacturing products",
            "Product."
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Which one of the following is the external factor impacting effective capacity?",
        "options": [
            "Product standards",
            "Scheduling",
            "Motivation",
            "Product mix"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Increasing capacity utilisation depends on",
        "options": [
            "Ability to increase design capacity",
            "Ability to increase effective capacity",
            "Ability to increase capacity chunk",
            "Ability to increase resource endowments"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Which one of the following is not within the purview of Long Range planning?",
        "options": [
            "Building a new facility",
            "Expanding the existing facility",
            "Moving to a new facility due to forecasted changes in demand",
            "Preparation of overtime budget for workforce"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "The basic difference between slack and float time is that",
        "options": [
            "A slack is used with reference to events whereas float is used with reference to activities",
            "A float is used with reference to events whereas slack is used with reference to activities",
            "A slack is used with reference to critical path whereas float is used with reference to non-critical paths",
            "A slack is used with reference to scheduling whereas float is used with reference to crashing"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Which one of the following is not a factor in determining Economic Lot Size for manufacturing?",
        "options": [
            "Production Schedule",
            "Usage rate",
            "Manufacturing Cost",
            "Cost of Deterioration"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Which one of the following is not a factor in planning service capacity",
        "options": [
            "Period of production",
            "Need to be near customers",
            "Inability to store services",
            "Degree of volatility of demand"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "It is extra capacity used to offset demand uncertainty. This is",
        "options": [
            "Capacity Cushion = Actual output -Demand",
            "Capacity Cushion = Capacity \u2013 Expected demand",
            "Capacity Tolerance = Effective capacity - Actual output",
            "Capacity Cushion = Capacity \u2013 Effective Capacity"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Which one of the following is correct?",
        "options": [
            "Capacity decision does not affect product lead times",
            "Capacity decisions must link backward & forward channels in the whole operation chain",
            "Expansionist strategy does not help a firm to reduce its costs and compete on price",
            "Wait & see strategy improves market share over the long run"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Leading capacity strategy",
        "options": [
            "Builds capacity in anticipation of increasing future demand",
            "Faces increasing demand with the undeutilised current capacity",
            "Builds capacity in anticipation of increasing product varieties",
            "Faces increasing consumption with unsold stock"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Which one of the following does not reduce effective capacity?",
        "options": [
            "Paperwork required by Government regulatory agencies",
            "Pollution standard on products",
            "Efficient distributors",
            "Higher labour turnover"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which one of the following is an operational factor that determines effective capacity?",
        "options": [
            "Product standards",
            "Quality capabilities",
            "Learning rates",
            "Quality assurance"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Which one of the following is not a factor impacting effective capacity?",
        "options": [
            "The design of facilities",
            "Product mix",
            "Layout of the work space",
            "Market share"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Benefits of high utilisation are realised only when",
        "options": [
            "Effective capacity is fully achieved",
            "There is high efficiency",
            "Breakdown maintenances are minimum",
            "There is demand for output"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Key to improving capacity utilisation is",
        "options": [
            "To increase effective capacity",
            "To increase design capacity",
            "To decrease effective capacity",
            "To increase maintenance frequency of the capacity"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Utilisation of an operation facility is measured by",
        "options": [
            "(Effective Capacity)/(Design Capacity)*100",
            "(Actual Output)/(Design Cpacity)*100",
            "(Actual output)/(Effective Capacity)*100",
            "(Design Capacity)/(Effectiv e Capacity)*100"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Efficiency of an operation facility is measured by",
        "options": [
            "(Effective Capacity)/(Design Capacity)*100",
            "(Actual Output)/(Design Cpacity)*100",
            "(Actual output)/(Effective Capacity)*100",
            "(Design Capacity)/(Effectiv e Capacity)*100"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which one of the following questions are not answered by Capacity planning?",
        "options": [
            "What kind of capacity is needed?",
            "How much is needed to match demand?",
            "When is it needed?",
            "For whom it is needed?"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Out of Balance Capacity occurs",
        "options": [
            "When there is a gap between supply and demand",
            "When there is a gap between long term supply and long term demand",
            "When there is a gap between current and desired capacity",
            "When there is a gap between actual supply and EOQ supply"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "The goal of capacity planning of an organisation is",
        "options": [
            "To achieve a match between its long term supply capabilities and the actual level of long term demand",
            "To achieve a level of operation so that supply failure could be maintained at \u2264 1% of long term demand",
            "To achieve a level of operation so that periodic mean operation remain within 95% of long term demand",
            "To achieve a match between its long term supply capabilities and the predicted level of long term demand"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Capacity refers to",
        "options": [
            "An upper limit or ceiling on the load that an operating unit can handle",
            "A range from a lower limit to an upper limit of load through which an operating unit could operate",
            "A limit on the load that an operating unit could handle only with 5% deviation",
            "An upper limit of load which an operating unit could break during emergency"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "This denotes the highest output established by the actual trial runs of the productive machines installed. This is",
        "options": [
            "Design capacity",
            "Rated capacity",
            "Effective capacity",
            "Licensed capacity"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Which one of the following is not a key question in Capacity planning?",
        "options": [
            "What kind of capacity is needed?",
            "What kind of facilities are needed?",
            "How much capacity is needed to match demand?",
            "When the capacity is it needed?"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Capacity Utilisation is",
        "options": [
            "The degree to which a resource such as equipment, space or the workforce is currently being used",
            "The degree to which a resource such as equipment, space or the workforce is currently being held as reserve",
            "The degree to which a resource such as equipment, space or the workforce is currently being used for achieving installed capacity",
            "The degree to which a resource such as equipment, space or the workforce is currently being used for achieving optimisation"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Actual Output cannot exceed effective capacity because of",
        "options": [
            "Problems of scheduling & balancing operations",
            "Rejection due to quality problems",
            "Need for periodic maintenance of equipment",
            "Changing product mix"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Need for periodic maintenance of equipment always makes",
        "options": [
            "Licensed capacity > Installed capacity",
            "Installed capacity < Effective capacity",
            "Design capacity > Effective capacity",
            "Licensed capacity = Effective capacity"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "If design capacity is reduced by allowances such as personal time and maintenance, the resultant capacity is",
        "options": [
            "Design capacity",
            "Effective capacity",
            "Installed capacity",
            "Licensed capacity"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "This capacity is the maximum rate of output achieved under ideal conditions. This is",
        "options": [
            "Design capacity",
            "Effective capacity",
            "Installed capacity",
            "Licensed capacity"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Which one of the following is an output measure of Capacity?",
        "options": [
            "Total capacity of AKC Motors in India is 300000 machine hours in a year",
            "Total Capacity of Z steel plant is 720000labour hours in a year",
            "The Aluminum giant XYZ produces 30mt in a day",
            "The oil conglomerate ABC has 80000gallon refinery size"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which one of the following is a feature of input measure of capacity?",
        "options": [
            "It is less applicable when the amount of customization and variety in the product mix increases",
            "It is used mainly in case of high volume processes such as car manufacturers",
            "Capacity is usually expressed as number of workstations or number of workers",
            "It is applicable when the firm provides a relatively small number of standardized services and products"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which one of the following is not a feature of output measure of capacity?",
        "options": [
            "It is applicable when the firm provides a relatively small number of standardized services and products",
            "It is used mainly in case of high volume processes such as car manufacturers",
            "It is generally used for low volume, flexible processes such as furniture maker",
            "It is less applicable when the amount of customization and variety in the product mix increases"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which one of the following is a feature of wait and see strategy?",
        "options": [
            "It facilitates a firm to compete on price;",
            "It guards against inaccurate assumptions regarding competition",
            "It might increase the firm\u2019s market share",
            "It results economies of scale"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Which one of the following is not a feature of expansionist strategy?",
        "options": [
            "It involves large infrequent jumps in capacity",
            "It minimizes the chance of sales lost to insufficient capacity",
            "It stays ahead of demand",
            "It lags behind demand"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Large capacity cushions are common in industries in which",
        "options": [
            "Demand is constant",
            "Customer service is not a priority",
            "Customer service is not a priority",
            "Competition is sluggish"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "The capacity cushion is",
        "options": [
            "The amount of installed capacity a process uses to handle sudden increase in demand",
            "The amount of licensed capacity a process uses to handle sudden increase in demand",
            "The amount of declared capacity a process uses to handle sudden increase in demand",
            "The amount of reserve capacity a process uses to handle sudden increase in demand"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Capacity decisions are strategic because",
        "options": [
            "Capacity decisions affect financing costs",
            "Capacity decisions can affect facility location",
            "Capacity at appropriate level facilitates easier management of product life cycle",
            "Capacity decisions can affect competitiveness"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Capacity decisions often involve",
        "options": [
            "Long term irrevocable commitment of resources",
            "Short term irrevocable commitment of resources",
            "Long term revocable commitment of resources",
            "(b) & (c) above"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Long-term capacity plans are concerned with",
        "options": [
            "Overtime budgets",
            "Investments in new facilities",
            "Work force size",
            "Inventories"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Capacity planning procedure does not involve which one of the following?",
        "options": [
            "Assess company situation and environment to analyse historical demand",
            "Translate future predictions of demand into physical capacity requirements",
            "Determine economic effects of alternative plans",
            "Selecting a capacity alternative most suited to achieve strategic mission of the firm."
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Which one of the following is not affected by Capacity decisions?",
        "options": [
            "Product lead times",
            "Customer Responsiveness",
            "Operating Costs",
            "Resource optimisation"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Capacity planning is a",
        "options": [
            "Long term makeover decision that establishes a firm\u2019s overall level of resources",
            "Long term realignment decision that establishes a firm\u2019s overall level of resources",
            "Long term restructuring decision that establishes a firm\u2019s overall level of resources",
            "Long term strategic decision that establishes a firm\u2019s overall level of resources"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Which one of the following is the result of excess capacity?",
        "options": [
            "Loss of customers",
            "Restricts growth",
            "Drain company\u2019s resources",
            "All the above"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Aggregate Resource Planning becomes a challenge when demand fluctuates over the planning horizon. Under this case which one of the following is correct?",
        "options": [
            "Demand forecasts are converted to resource requirements",
            "Producing at a constant rate and using inventory to absorb fluctuations in demand",
            "Resources necessary to meet demand over the time horizon are acquired",
            "Minor variations in demand are handled with overtime or under time"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "The four step systematic approach to plan for long term capacity decisions does not involve",
        "options": [
            "Estimate future productivity requirement",
            "Estimate future capacity requirements",
            "Identify gaps by comparing requirements with available capacity",
            "Develop alternative plans for reducing the gaps"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "In operation sequence if capacity of a facilty is lower than the capacities of other facilities in the sequence it is",
        "options": [
            "Unutilised operation",
            "Flexible operation",
            "Rigid operation",
            "Bootleneck operation"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Which one of the following is not an objective of MRP?",
        "options": [
            "Inventory Reduction",
            "Realistic delivery commitments",
            "Reduction in the manufacturing and delivery lead times",
            "Reasonable production schedule"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Which one of the following is not a characteristics of Aggregate Planning?",
        "options": [
            "Both output and sales should be expressed in a logical overall unit of measuring",
            "Acceptable forecast for the period covering the whole planning horizon",
            "A method of identification and fixing the relevant costs associated with the plant.",
            "Availability of alternatives for meeting the objective of the organization"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Which one of the following is correct with respect to long range forecast?",
        "options": [
            "It is used to determine budgetary control over expenses",
            "It is used to determine dividend policy",
            "It is used to plan for capacity adjustments",
            "It is used to plan for material requirement"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "The card which is prepared by the dispatching department to book the labour involved in each operation is :",
        "options": [
            "Labour card",
            "Wage card",
            "Credit card",
            "Job card"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "One of the product examples for Line Layout is :",
        "options": [
            "Repair Workshop",
            "Welding shop",
            "Engineering College",
            "Cement"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "The following establishes time sequence of operations:",
        "options": [
            "Routing",
            "Sequencing",
            "Scheduling",
            "Dispatching"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "The act of going round the production shop to note down the progress of work and feedback the information is known as:",
        "options": [
            "Follow up",
            "Dispatching",
            "Routing",
            "Trip card"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "In aggregate planning one of the methods used to modification of supply is:",
        "options": [
            "Advertising and sales promotion",
            "Development of complimentary products",
            "Backlogging",
            "Hiring and lay off of employees depending on the situation."
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "In aggregate planning, one of the methods in modification of demand is:",
        "options": [
            "Differential Pricing",
            "Lay off of employees",
            "Over time working",
            "Sub-contracting."
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "One of the requirements of Aggregate Planning is:",
        "options": [
            "Both output and sales should be expressed in a logical overall unit of measuring",
            "Appropriate time period",
            "List of all resources available",
            "List of operations required."
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "The study of relationship between the load on hand and capacity of the work centers is known as:",
        "options": [
            "Scheduling",
            "Loading",
            "Routing",
            "Controlling."
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Scheduling deals with:",
        "options": [
            "Number of jobs to be done on a machine",
            "Number of machine tools used to do a job",
            "Different materials used in the product",
            "Fixing up starting and finishing times of each operation in doing a job."
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Scheduling shows:",
        "options": [
            "Total cost of production",
            "Total material cost",
            "Which resource should do which job and when",
            "The flow line of materials."
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Final stage of production planning, where production activities are coordinated and projected on a time scale is known as:",
        "options": [
            "Scheduling",
            "Loading",
            "Expediting",
            "Routing."
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "(Total station time/Cycle time \u00d7 Number of work stations) \u00d7 100 is known as:",
        "options": [
            "Line Efficiency",
            "Line smoothness",
            "Balance delay of line",
            "Station efficiency."
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "In solving a problem on LOB, the number of workstations required is given by:",
        "options": [
            "Cycle time/Total time",
            "Cycle time/Element time",
            "Total time/Element time",
            "Total time/ Cycle time."
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Number of product varieties that can be manufactured in Mass production is:",
        "options": [
            "One only",
            "Two only",
            "Few varieties in large volumes",
            "Large varieties in small volumes."
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Generally in continuous production the production is carried out to:",
        "options": [
            "Customer\u2019s order",
            "Government orders only",
            "For stock and supply",
            "Few rich customers"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Inventory cost per product in intermittent production is",
        "options": [
            "Higher",
            "Lowest",
            "Medium",
            "Abnormal."
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "The material handling cost per unit of product in Continuous production is:",
        "options": [
            "Highest compared to other systems",
            "Lower than other systems",
            "Negligible",
            "Cannot say."
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Routing and Scheduling becomes relatively complicated in",
        "options": [
            "Job production",
            "Batch production",
            "Flow production",
            "Mass production"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Number of product varieties that can be manufactured in Job production is:",
        "options": [
            "Limited to one or two",
            "Large varieties of products",
            "One only",
            "None of the above."
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "In general number of product varities that can be manufactured in Flow production is:",
        "options": [
            "One only",
            "Ten to twenty varities",
            "Large varities",
            "Five only"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Generally the size of the order for production in Job production is:",
        "options": [
            "Small",
            "Large",
            "Medium",
            "Very large"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "For a marketing manager, the sales forecast is:",
        "options": [
            "Estimate of the amount of unit sales or a specified future period",
            "Arranging the sales men to different segments of the market",
            "To distribute the goods through transport to satisfy the market demand",
            "To plan the sales methods."
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "The time horizon selected for forecasting depends on:",
        "options": [
            "The salability of the product",
            "The selling capacity of Salesman",
            "Purpose for which forecast is made",
            "Time required for production cycle."
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Manufacturing system often produces:",
        "options": [
            "Standardised products",
            "Standardised products in large volumes",
            "Substandardproduct s in large volumes",
            "Products and services in limited volume"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Most suitable layout for Job production is:",
        "options": [
            "Line layout",
            "Matrix layout",
            "Process layout",
            "Product layout."
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Most suitable layout for Continuous production is:",
        "options": [
            "Line layout",
            "Process Layout",
            "Group technology",
            "Matrix layout."
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "One of the product examples for Line layout is:",
        "options": [
            "Repair workshop",
            "Welding shop",
            "Engineering College",
            "Cement."
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "One of the important basic objectives of Inventory management is:",
        "options": [
            "To calculate EOQ for all materials in the organisation",
            "To go in person to the market and purchase the materials",
            "To employ the available capital efficiently so as to yield maximum results",
            "Once materials are issued to the departments, personally check how they are used."
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "MRP stands for:",
        "options": [
            "Material Requirement Planning",
            "Material Reordering Planning",
            "Material Requisition Procedure",
            "Material Recording Procedure."
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "In route sheet or operation layout, one has to show:",
        "options": [
            "A list of Materials to be used",
            "A list of machine tools to be used",
            "Every work center and the operation to be done at that work center",
            "The cost of product."
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "In aggregate planning, one of the methods in modification of demand is:",
        "options": [
            "Differential Pricing",
            "Lay off of employees",
            "Over time working",
            "Sub contracting."
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "A steel plant has a design capacity of 50,000 tons of steel per day ,effective capacity of 40,0000 tons of steel per day and actual output of 36,0000 tons of steel per day. Compute the efficiency of the plant",
        "options": [
            "90%",
            "72%",
            "80%",
            "110%"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "A firm has four work centres A,B,C & D , in series with individual capacities in units per day shown in below : raw material A - 380 B - 360 C- 340 D - 400 ---- Actual output 300, what is the efficiency system",
        "options": [
            "80.33%",
            "77.66%",
            "99%",
            "88.23%"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "The monthly requirement of raw material for a company is 3000 units .The carrying cost is estimated to be 20% of the purchase price per unit ,in addition to rs 2 per unit.The purchase price of raw material is rs 20 per unit.The ordering cost is Rs 25 per order. You are required to find EOQ.",
        "options": [
            "458 units",
            "548 units",
            "448 units",
            "844 units"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "EOQ is 102 units ,maximum usage 200 units , maximum delivery period 8 weeks , minimum usage 50 units, minimum delevery period 6 weeks , calculate maximum level of stock",
        "options": [
            "1502 units",
            "1202 units",
            "1402 units",
            "1302 units"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "M/s Kobo Bearing Ltd is committed to supply 24,000 bearings per annum to M/s Deluxe fans on a steady daily basis .It is estimated that it costs 10 paisa as inventory holding cost per bearing per month and that the setup cost per run of bearing manufacture is 324.What is the optimum run size for bearing manufacture ?",
        "options": [
            "3600 units",
            "1200 units",
            "7200 units",
            "8400 units"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "In general, medium range forecasting period will be approximately:",
        "options": [
            "5 to 10 Years",
            "2 to 3 days",
            "3 to 6 months",
            "10 to 20 years."
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "The range of Long range forecasting period may be approximately:",
        "options": [
            "1 to 2 weeks",
            "2 to 3 months",
            "1 year",
            "above 5 years."
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "To plan for future man power requirement:",
        "options": [
            "Short term forecasting is used",
            "Long range forecasting is used",
            "Medium range forecasting is used",
            "There is no need to use forecasting, as future is uncertain."
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Long range forecasting is useful in:",
        "options": [
            "Plan for Research and Development",
            "To Schedule jobs in Job production",
            "In purchasing the material to meet the present production demand",
            "To assess manpower required in the coming month."
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Medium range forecasting is useful in:",
        "options": [
            "To assess the loading capacity of the machine",
            "To purchase a materials for next month",
            "To plan for-capacity adjustments",
            "To decide whether to receive production orders or not."
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Important factor in forecasting production is:",
        "options": [
            "Environmental changes",
            "Available capacity of machines",
            "Disposable income of the consumer",
            "Changes in the preference of the consumer."
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "To decide work load for men and machines:",
        "options": [
            "Medium range forecasting is used",
            "Short term forecasting is used",
            "Long range forecasting is used",
            "A combination of long range and medium range forecasting is used."
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "For production planning:",
        "options": [
            "Shot term forecasting is useful",
            "Medium term forecasting is useful",
            "Long term forecasting is useful",
            "Forecasting is not useful."
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "In general, medium range forecasting period will be approximately",
        "options": [
            "5 to 10 Years",
            "2 to 3 days",
            "3 to 6 months",
            "10 to 20 years"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Medium range forecasting is useful in:",
        "options": [
            "To assess the loading capacity of the machine",
            "To purchase a materials for next month",
            "To plan for-capacity adjustments",
            "To decide whether to receive production orders or not."
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Monthly demand for a component is 1000 units. Setting-up cost per batch is ` 120. Cost of manufacture per unit is ` 20. Rate of interest may be considered at 10% p.a. Calculate the EBQ",
        "options": [
            "1200 units",
            "1400 units",
            "1440 units",
            "1000 units"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Daily demand for a certain product is normally distributed with a mean of 60 and standard deviation of 7. The source of supply is reliable and maintain a constant lead time of six days. The cost of placing the order is ` 10 and annual holding costs are ` 0.50 per unit. There are no stock out costs, and unfilled orders are filled as soon as the order arrives. Assume sales occur over the entire 365 days of the year.Find the . Find the order quantity",
        "options": [
            "336 units",
            "936 units",
            "633 inits",
            "393 units"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Consider the following item that is being managed using a fixed time period model with safety stock Weekly demand (d) = 50 units Review cycle (T) = 3 weeks Safety stock (SS) = 30 units What are the average inventory turn for the item?",
        "options": [
            "24.8 turns per year",
            "84.2 turns per year",
            "80 turns per year",
            "None of the above."
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Addition of value to raw materials through application of technology is :",
        "options": [
            "Product",
            "Production",
            "Advancement",
            "Transformation"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Cost reduction can be achieved through",
        "options": [
            "Work sampling",
            "Value analysis",
            "Quality assurance",
            "Supply chain management."
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Production control concerned with:",
        "options": [
            "Passive assessment of plant performance",
            "Strict control on labours",
            "Good materials management",
            "Good product design."
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "The starting point of Production cycle is:",
        "options": [
            "Product design",
            "Production Planning",
            "Routing",
            "Market research."
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Variety reduction is generally known as:",
        "options": [
            "Less varities",
            "Simplification",
            "Reduced varities",
            "None of the above."
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Preferred numbers are used to:",
        "options": [
            "To determine the number of varities that are to be manufactured",
            "To the test the design of the product",
            "To ascertain the quality level of the product",
            "To evaluate the production cost."
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "There are ______ stages of Design thinking",
        "options": [
            "5",
            "3",
            "4",
            "2"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Most suitable layout for Job production is",
        "options": [
            "Line layout",
            "Matrix layout",
            "Process layout",
            "Product layout"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Most suitable layout for Continuous production is:",
        "options": [
            "Line layout",
            "Matrix layout",
            "Process layout",
            "Product layout"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "One of the product examples for Line layout is:",
        "options": [
            "Repair workshop",
            "Welding shop",
            "Engineering College",
            "Cement."
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Generally in continuous production the production is carried out to:",
        "options": [
            "Customer\u2019s order",
            "Government orders only",
            "For stock and supply",
            "Few rich customers."
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Inventory cost per product in intermittent production is:",
        "options": [
            "Higher",
            "Lowest",
            "Medium",
            "Abnormal."
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "The material handling cost per unit of product in Continuous production is:",
        "options": [
            "Highest compared to other systems",
            "Lower than other systems",
            "Negligible",
            "Cannot say."
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Routing and Scheduling becomes relatively complicated in",
        "options": [
            "Job production",
            "Batch production",
            "Flow production",
            "Mass production."
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "The starting point of Production cycle is:",
        "options": [
            "Product design",
            "Production Planning",
            "Routing",
            "Market research."
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "In Process Planning we plan:",
        "options": [
            "Different machines required",
            "Different operations required",
            "We plan the flow of material in each department",
            "We design the product."
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "In Operation Planning",
        "options": [
            "The planner plans each operation to be done at work centers and the sequence of operations",
            "Decide the tools to be used to perform the operations",
            "Decide the machine to be used to perform the operation",
            "Decide the materials to be used to produce the product"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "One of the important production documents is:",
        "options": [
            "Design sheet of the product",
            "List of materials",
            "Route card",
            "Control chart."
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "The scope of Production Planning and Control is:",
        "options": [
            "Limited to Production of products only",
            "Limited to production of services only",
            "Limited to production of services and products only",
            "Unlimited, can be applied to any type of activity."
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Which one of the following product is not suitable for flow shop scheduling?",
        "options": [
            "Car",
            "Petrol",
            "Steel",
            "Invitation Card"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Which one of the following is a Sequencing rule for single facility?",
        "options": [
            "EVPI",
            "DFA",
            "MAD",
            "LPT"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "The main question in an assignment problem is",
        "options": [
            "How the assignments should be made in order that the total cost involved in activities is minimized",
            "How the assignments should be made in order that the total resources involved in activities is optimised",
            "How the assignments should be made in order that the total time involved in activities is minimized",
            "How the assignments should be made in order that inter dependence among all activities is minimized"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Linear Programming is a technique used for determining:",
        "options": [
            "Production Programme",
            "Plant Layout",
            "Product Mix",
            "Manufacturing sequence"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "In a linear programming model feasible solution is",
        "options": [
            "The basic solution to the general L.P problem",
            "Any solution that also satisfies the non-negative restrictions of the general L.P problem",
            "A solution which optimize (maximize or minimize) the objective function of a general L.P problem",
            "A basic solution to the system of equations if one or more of the basic variables become equal to zero"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Which one of the following is not a limitation of linear programming model?",
        "options": [
            "Model can be applied only in situations where objective functions can be expressed in terms of linear expressions",
            "Model can be applied only when coefficients in the constraints equations must be completely known",
            "Model can be applied only to all real world problems which are not complex in nature",
            "Model cannot be applied to give a solution if management have conflicting multiple goals."
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which of the following is not a method for solving Assignment problem?",
        "options": [
            "Complete Enumeration method",
            "Hungarian method",
            "Simplex method",
            "Natural method"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "The objective of application of linear programming in industrial problems is",
        "options": [
            "To determine a plan for production and procurement in the time period under consideration",
            "To determine an optimal solution of the problem under the given constraints",
            "To determine the cost effective solution of the problem under scarce resources",
            "To determine a plan for time based solution to the problem for increasing productivity"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Simulation is the representation of a real life situation by different means. It is popular because---",
        "options": [
            "It may be the only method available as it is difficult to observe the actual environment",
            "It may not be possible to develop a mathematical model",
            "Actual observation of a system may be too expensive or too disruptive",
            "All the above"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "In sequencing it is the difference between the time remaining to due date and the remaining processing time. It is",
        "options": [
            "STR",
            "SOT",
            "SPT",
            "DDATE"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Selection of plant location is influenced by few factors. Which one of the following is not a factor?",
        "options": [
            "Existence of Complementary Industries",
            "Availability of Labour",
            "Civic Amenities for Workers",
            "Government\u2019s EXIM Policy"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "In a queuing system, the speed with which service is provided can be expressed in either of two ways\u2014",
        "options": [
            "Service start time and Service finish time",
            "Service rate and Service time",
            "Arrival rate and Service rate",
            "Service Inflow rate and Service outflow rate"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Most suitable layout for continuous production is",
        "options": [
            "Line layout",
            "Process layout",
            "Group technology",
            "Matrix layout"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "The most powerful and popular method for solving linear programming problem is",
        "options": [
            "Simplex method",
            "Graphical method",
            "Transportation method",
            "Assignment method"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "(Total station time/cycle time \u00d7 Number of work stations) \u00d7 100 is known as",
        "options": [
            "Line efficiency",
            "Line smoothness",
            "Balance delay of line",
            "Station efficiency"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "One of the important charts used in Programme control is:",
        "options": [
            "Material chart",
            "Gantt chart",
            "Route chart",
            "Inspection chart"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Issuing necessary orders, and taking necessary steps to ensure that the time targets set in the schedules are are effectively achieved is known as:",
        "options": [
            "Routing",
            "Dispatching",
            "Scheduling",
            "Inspection."
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Linear Programming is a technique used for determining:",
        "options": [
            "Production Programme",
            "Plant Layout",
            "Product Mix",
            "Manufacturing sequence."
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Arrangement of machines depending on sequence of operations happens in:",
        "options": [
            "Process Layout",
            "Product Layout",
            "Hybrid Layout",
            "Group Technology Layout."
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Computers are used in Production control in this area:",
        "options": [
            "Follow-up activity",
            "To control labour",
            "To disseminate information",
            "Loading, Scheduling and Assignment works."
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Z-chart can be used to show:",
        "options": [
            "Process used in production",
            "Quality level of the product",
            "Both the plan and the performance, and deviation from the plan",
            "To show cost structure of the product"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "\u2018Z\u2019 chart is a chart used in:",
        "options": [
            "Programme control",
            "Job control",
            "Cost control",
            "Quality control."
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "One of the activities of expediting is:",
        "options": [
            "To file the orders in sequence",
            "To decide the sequence of operation",
            "To record the actual production against the scheduled production",
            "To examine the tools used in production"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "When work centers are used in optimal sequence to do the jobs, we can:",
        "options": [
            "Minimise the set up time",
            "Minimise operation time",
            "Minimise the breakdown of machines",
            "Minimise the utility of facility."
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "The way in which we can assess the efficiency of the production plant is by:",
        "options": [
            "Efficient dispatching",
            "By manufacturing a good product",
            "By comparing the actual performance with targets specified in the specified programme",
            "By efficient production planning."
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "One of the important charts used in Programme control is:",
        "options": [
            "Material chart",
            "Gantt chart",
            "Route chart",
            "Inspection chart"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "One of the important production documents is:",
        "options": [
            "Design sheet of the product",
            "List of materials",
            "Route card",
            "Control chart."
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "The first stage of Production control is:",
        "options": [
            "Dispatching",
            "Scheduling",
            "Routing",
            "Triggering of production operations and observing the progress and record the deviation"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Production planning in the intermediate range of time is termed as:",
        "options": [
            "Production planning",
            "Long range production planning",
            "Scheduling",
            "Aggregate planning"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "One of the principles of Scheduling is:",
        "options": [
            "Principle of optimal product design",
            "Principle of selection of best material",
            "Principle of optimal operation sequence",
            "Principle of optimal cost."
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "One of the aims of loading is:",
        "options": [
            "To finish the job as early as possible",
            "To minimise the material utilisation",
            "To improve the quality of product",
            "To keep operator idle time, material waiting time and ancillary machine time at minimum."
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "The cycle time in selected in balancing a line must be:",
        "options": [
            "Must be greater than the smallest time element given in the problem",
            "Must be less than the highest time element given in the problem",
            "Must be slightly greater than the highest time element given in the problem",
            "Left to the choice of the problem solver."
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "In solving a problem on LOB, the number of workstations required is given by:",
        "options": [
            "Cycle time/Total time",
            "Cycle time/Element time",
            "Total time/Element time",
            "Total time/ Cycle time."
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Number of product varieties that can be manufactured in Job production is:",
        "options": [
            "Limited to one or two",
            "Large varieties of products",
            "One only",
            "None of the above."
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "For a marketing manager, the sales forecast is:",
        "options": [
            "Estimate of the amount of unit sales or a specified future period",
            "Arranging the sales men to different segments of the market",
            "To distribute the goods through transport to satisfy the market demand",
            "To plan the sales methods"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "For production planning:",
        "options": [
            "Shot term forecasting is useful",
            "Medium term forecasting is useful",
            "Long term forecasting is useful",
            "Forecasting is not useful."
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Production planning deals with:",
        "options": [
            "What production facilities is required and how these facilities should be laid out in space available",
            "What to produce and when to produce and where to sell",
            "What should be the demand for the product in future",
            "What is the life of the product?"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "The first stage in production planning is:",
        "options": [
            "Process Planning",
            "Factory Planning",
            "Operation Planning",
            "Layout planning."
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "In Process Planning we plan:",
        "options": [
            "Different machines required",
            "Different operations required",
            "We plan the flow of material in each department",
            "We design the product."
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Economies of scale occurs when",
        "options": [
            "Single facility is used for multiple purposes",
            "Production or operating costs increase linearly with output levels",
            "Quantity discounts are not available for material purchases;",
            "Operating efficiency increases as workers gain experience"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "The act of assessing the future and make provisions for it is known as",
        "options": [
            "Planning",
            "Forecasting",
            "Assessment",
            "Scheduling."
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Application of technology or process to the raw material to add use value is known as:",
        "options": [
            "Product",
            "Production",
            "Application of technology",
            "Combination of technology and process."
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "In Production by disintegration the material undergoes:",
        "options": [
            "Change in economic value only",
            "Change in physical and chemical characteristics",
            "Change in technology only",
            "None of the above."
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "The scope of Production Planning and Control is:",
        "options": [
            "Limited to Production of products only",
            "Limited to production of services only",
            "Limited to production of services and products only",
            "Unlimited, can be applied to any type of activity."
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "In an organisation the production planning and control department comes under:",
        "options": [
            "Planning department",
            "Manufacturing department",
            "Personal department",
            "R & D department."
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "In Job production system, we need:",
        "options": [
            "More unskilled labours",
            "Skilled labours",
            "Semi-skilled labours",
            "Old people."
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Wanda\u2019s Car Wash & dry is an automatic, five-minute operation with a single bay. On a typical Saturday morning, cars arrive at a mean rate of eight per hour, with arrivals tending to follow a Poisson distribution. Find The average time cars spend in line and service.",
        "options": [
            "10 minutes",
            "20 minutes",
            "15 minutes",
            "None of the above."
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "A departmental store has one cashier. During the rush hours, customers arrive at a rate of 20 per hour. The average number of customers that can be handled by the cashier is 24 per hour. Assume the conditions for use of the single \u2013 channel queuing model. Find out average customer spends in the system",
        "options": [
            "10 customers",
            "5 customers",
            "15 customers",
            "20 customers"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "As a tool service centre the arrival rate is two per hour and the service potential is three per hour. Simple queue conditions exist. The hourly wage paid to the attendant at the service centre is `1.50 per hour and the hourly cost of a machinist away from his work is ` 4. Calculate:The average time a machinist spends waiting for service.",
        "options": [
            "0.777 hours",
            "0.667 hours",
            "0.600 hours",
            "0.700 hours"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Which one of the following is not a factor affecting productivity?",
        "options": [
            "Product design",
            "Material handling system",
            "Inventory control",
            "Master production schedule"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Which one of the following is not correct?",
        "options": [
            "Productivity can be improved by changing work methods",
            "Productivity relates to a fixed set of tools or conditions",
            "For countries, high productivity rates can reduce the risk of inflation",
            "Productivity measures are used to judge the effective use of resources"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Which one of the following is not a factor for determination of effective capacity?",
        "options": [
            "Scheduling",
            "Labour turnover",
            "Union attitudes",
            "EOQ"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "A device of expressing the ratio between outputs and the inputs of the resources in numerical terms is named",
        "options": [
            "Productivity Index",
            "Efficiency Index",
            "Performance Index",
            "Resource Index"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "In Production by service, the product undergoes the changes in:",
        "options": [
            "Shape and size of the surface",
            "Shape of the surface only",
            "Size of the surface only",
            "Chemical and Mechanical properties."
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Use of any process or procedure designed to transform a set of input elements into a set of output elements is known as:",
        "options": [
            "Transformation process",
            "Transformation of input to output",
            "Production",
            "Technology change"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Conversion of inputs into outputs is known as:",
        "options": [
            "Application of technology",
            "Operations management",
            "Manufacturing products",
            "Product"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Most important benefit to the consumer from efficient production system is:",
        "options": [
            "He can save money",
            "He will have product of his choice easily available",
            "He gets increased use value in the product",
            "He can get the product on credit."
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "In Continuous manufacturing system, we need:",
        "options": [
            "General purpose machines and Skilled labours",
            "Special machine tools and highly skilled labours",
            "Semi automatic machines and unskilled labours",
            "General purpose machines and unskilled labours"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "The best way of improving the productivity of capital is:",
        "options": [
            "Purchase automatic machines",
            "Effective Labour control",
            "To use good financial management",
            "Productivity of capital is to be increased through effective materials management."
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "There are two industries A and B manufacturing hose couplings. The standard time per piece is 15 minutes. The output of two small scale industries is 30 and 20 respectively per shift of 8 hours. Find the productivity of each per shift of 8 hours.",
        "options": [
            "15/16, 5/8",
            "7/24 , 9/16",
            "3/8 , 2/5",
            "none of the above"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Calculate the standard production per shift of 8 hours duration, with the following data: Observed time per unit = 5 minutes, Rating Factor -120%, Total allowances = 30% of normal time.",
        "options": [
            "45.61 units",
            "54.61 units",
            "51.64 units",
            "61.54 units"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "ISO 9004 only establishes guidelines",
        "options": [
            "operation",
            "design",
            "quality",
            "none of the above"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "for Quality Assurance in Design, Production, Installation and Servicing the _____ model is be used.",
        "options": [
            "ISO 9002 Model",
            "ISO 9001 Model",
            "ISO 9003 Model",
            "none of the above"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "for Quality Assurance in Production and Installation the _____ model is be used.",
        "options": [
            "ISO 9002 Model",
            "ISO 9001 Model",
            "ISO 9003 Model",
            "none of the above"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "for Quality Assurance in Final Inspection Test the _____ model is be used.",
        "options": [
            "ISO 9002 Model",
            "ISO 9001 Model",
            "ISO 9003 Model",
            "none of the above"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "A cement factory in Madhya Pradesh works 7 days a week in 3 shifts per days having maintenance in the first shift of around 2 hours. It has roughly 100 workers which produces only pozzolanic properties cement better known as PPC. The output per month is around 2500 tonnes of PPC. Find the productivity per worker?",
        "options": [
            "20 tonnes",
            "30 tonnes",
            "25 tonnes",
            "15 tonnes"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "The method used in scheduling a project is:",
        "options": [
            "A schedule of breakdown of orders",
            "Outline Master Programme",
            "PERT & CPM",
            "Schedule for large and integrated work"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "The difference between product system and project system is:",
        "options": [
            "Project system the equipment and machinery are fixed where as in product system they are movable",
            "In Product system the machinery and equipment are fixed and in project system they are not fixed",
            "Project system produces only standardized products and product system produces only unstandardised products",
            "Products cannot be stocked whereas projects can be stocked."
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Fixing the flow lines of materials in production is known as:",
        "options": [
            "Scheduling",
            "Loading",
            "Planning",
            "Routing."
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "The activity of specifying when to start the job and when to end the job is known as:",
        "options": [
            "Plaining",
            "Scheduling",
            "Timing",
            "Follow-up."
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "A network :",
        "options": [
            "Is a graphical representation of all the activities and events.",
            "Is a graphical representation of all the activities",
            "Is a graphical representation of all the events.",
            "All the above"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "While evaluating existing or proposed service systems, operation manager",
        "options": [
            "Relate to potential customer dissatisfaction and costs:",
            "Relate cost of parallel facilities with single queue",
            "Relate cost of multiple queues with cost of serve",
            "Relate to potential customer satisfaction and service quality"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Probalistic time is dividded into :",
        "options": [
            "3",
            "2",
            "4",
            "6"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Gantt Chart is a principal tool used in",
        "options": [
            "Scheduling",
            "Loading",
            "Planning",
            "Routing."
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "The event from where more than one activity starts",
        "options": [
            "Merge event",
            "Brust Event",
            "start event",
            "event nodes"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Free float means or is equal to",
        "options": [
            "Total float - Slack time of the head event",
            "Independent Float +Tail Slack",
            "Independent Float -Head Slack",
            "PERT"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "The critical path analysis is an important tool in production planning and_________",
        "options": [
            "Loading",
            "scheduling",
            "Routing.",
            "All the above"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "The method used in scheduling a project is:",
        "options": [
            "A schedule of break-down of orders",
            "Outline master programme",
            "PERT & CPM",
            "Schedule for large and integrated work"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "One of the important charts used in programme control is:",
        "options": [
            "Material chart",
            "Gantt chart",
            "Route chart",
            "Inspection chart"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Final stage of production planning, where production activities are coordinated and projected on a time scale is known as:",
        "options": [
            "Scheduling",
            "Loading",
            "Planning",
            "Routing"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "One of the principles of Scheduling is:",
        "options": [
            "Principle of optimal product design",
            "Principle of selection of best material",
            "Principle of optimal operation sequence",
            "Principle of optimal cost."
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Issuing necessary orders, and taking necessary steps to ensure that the time targets set in the schedules are effectively achieved is known as:",
        "options": [
            "Routing",
            ") Dispatching",
            "Scheduling",
            "Inspection."
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Which one of the following statements is NOT correct?",
        "options": [
            "LFT is calculated from the LFT of the head event.",
            "Slack can be calculated by adding EFT and LFT of any job.",
            "EFT is the sum of the EST and the time of duration for any event",
            "The Total Project time is the shortest possible time required in completing the project."
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Which one of the following establishes time sequence of operations?",
        "options": [
            ") Routing",
            "Sequencing",
            "Scheduling",
            "Dispatching"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Issuing necessary orders, and taking necessary steps to ensure that the time targets set in the schedules are effectively achieved is known as:",
        "options": [
            "Routing",
            "Dispatching",
            "Scheduling",
            "Inspection."
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Which one of the following is the benefit of keeping standby machines?",
        "options": [
            "Utilisation of Additional space",
            "Appropriate investment of additional capital",
            "Availability of Additional Depreciation",
            "Protection against a complete shutdown"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Preventive maintenance is useful in reducing",
        "options": [
            "Inspection Cost",
            "Shutdown Cost",
            "Cost of pre- mature replacement",
            "Set-up cost of machine"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Two important functions that are to be done by Production department are:",
        "options": [
            "Forecasting",
            "Costing",
            "Scheduling and loading",
            "Inspecting."
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "When work centers are used in optimal sequence to do the jobs, we can:",
        "options": [
            "Minimise the set up time",
            "Minimse operation time",
            "Minimise the break down of machines",
            "Minimise the utility of facility."
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Preventive maintenance policy is justified only when",
        "options": [
            "The average downtime and its cost is equal to the average time taken to carry out breakdown repairs",
            "The average downtime and its cost is greater than the average time taken to carry out breakdown repairs",
            "The average downtime and its cost is less than the average time taken to carry out breakdown repairs",
            "The average downtime t is less than the average time taken to carry out breakdown repairs"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Which one of the following is not correct?",
        "options": [
            "Preventive maintenance reduces breakdowns and downtime",
            "Preventive maintenance increases number of large scale repairs",
            "Preventive maintenance Lower unit cost of the product manufactured,",
            "Preventive maintenance improves industrial relations"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Production department or maintenance department depending on the size of the plant generally takes up",
        "options": [
            "preventive maintenance work.",
            "capacity planning",
            "project maintenance",
            "all of them"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "The main problem in maintenance analysis is to________ the overall cost of maintenance without sacrificing the objectives.",
        "options": [
            "Stable",
            "plan",
            "minimise",
            "replace"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "In some cases the__________ and inconvenience due to breakdown of equipment is so high that standby equipment is kept.",
        "options": [
            "cost",
            "loss",
            "time",
            "intervals"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "____________ while the equipment is running or during pre-planned shut-downs.",
        "options": [
            "Routine maintenance",
            "preventive maintenance",
            "replacement",
            "break down maintenance"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "The organizational structure should be",
        "options": [
            "systematic",
            "well maintained",
            "flexible.",
            "all of them"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Which one of the following is NOT the advantage of Preventive Maintenance?",
        "options": [
            "Better product quality",
            "Greater safety to workers",
            "Increased breakdowns and downtime",
            "Fewer large-scale repairs"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Identify which one of the following is NOT the objective of the maintenance:",
        "options": [
            "To keep all production facilities and allied facilities in an optimum working condition.",
            "To ensure specified accuracy to products and time schedule of delivery to customers",
            "To keep the down time of the machine at the maximum.",
            ") To keep the production cycle within the stipulated range."
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": ". One of the objectives of maintenance is:",
        "options": [
            "to prevent obsolescence",
            "to ensure spare parts management.",
            "to satisfy customers.",
            "to extend the useful life of Plant & Machinery without sacrificing the level of performance"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "The monitoring, evaluating and disseminating of information from the external and internal environments to key people within the organisation is called",
        "options": [
            "Strategy Formulation",
            "Evaluation and control",
            "Strategy Implementation",
            "Environmental scanning"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "The ____of a company state how managers and employees should conduct themselves.",
        "options": [
            "values",
            "goals",
            "objectives",
            "vison"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "____________ are the day-to-day way in which an organisation operates and can be seen by people both inside and outside the organisation.",
        "options": [
            "Performances",
            "Targets",
            "Behaviours",
            "Values"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which among the following provide the standards for performance appraisal?",
        "options": [
            "Mission",
            "Vision",
            "Values",
            "Objectives"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "___________ is concerned with complexity arising out of ambiguous and non-routine situations with organisation wide rather than operation-specific implications.",
        "options": [
            "Operational management",
            "Business level strategy",
            "Strategic Management",
            "Functional level strategy"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "____________ refer to the job-specific goals of each individual employee.",
        "options": [
            "Balanced Score Card",
            "Performance objectives",
            "Personal objectives",
            "Organisational genomics"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "The balanced score card is a approach to performance management",
        "options": [
            "top-down",
            "bottom up",
            "indirect",
            "direct"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "This_____ provides the broad \u2018data\u2019 from which to identify key drivers of change.",
        "options": [
            "SWOT analysis",
            "BCG matrix",
            "PESTEL analysis",
            "Critical Success Factors"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Environment is__________ .",
        "options": [
            "complex",
            "dynamic",
            "Multi-faceted",
            "All of the above"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "________are the growth rate of the economy, interest rates, currency exchange rates, and inflation (or deflation) rates.",
        "options": [
            "Macro-economic forces",
            "Demographic forces",
            "Technological forces",
            "Political forces"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "_________are outcomes of changes in the characteristics of a population",
        "options": [
            "Macro-economic forces",
            "Demographic forces",
            "Technological forces",
            "Political forces"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "What describes the categories of activities within and around an organisation, which together create a product or service?",
        "options": [
            "SWOT analysis",
            "BCG framework",
            "Value Chain",
            "Brain storming"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "_________transform these inputs into the final product or service.",
        "options": [
            "Operations",
            "Inbound logistics",
            "Outbound logistics",
            "Service"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "____________includes those activities that enhance or maintain the value of product or service, such as installation, repair, training and spares.",
        "options": [
            "Operations",
            "Inbound logistics",
            "Outbound logistics",
            "Service"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "____________are companies that are not currently competing in an industry, but have the capability to do so if they choose.",
        "options": [
            "Established companies",
            "Potential competitors",
            "Rivals",
            "Competitors"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Absolute cost advantages arise from",
        "options": [
            "superior production operations and processes",
            "control of particular inputs required for production",
            "access to cheaper funds",
            "all of the above"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "A______________is a combination of structures which could take the form of product and geographical divisions or functional and divisional structures operating in tandem.",
        "options": [
            "Functional structure",
            "Matrix Structure",
            "Project based structure",
            "Transnational structure"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "A_________combines the local responsiveness of the international subsidiary with the coordination advantages found in global product companies.",
        "options": [
            "Functional structure",
            "Matrix Structure",
            "Project based structure",
            "Transnational structure"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Which among the following is true?",
        "options": [
            "BPR has resulted in major gains in efficiency.",
            "BPR has resulted in major gains in speed",
            "BPR has resulted in major gains in quality.",
            "BPR has resulted in major gains in efficiency, quality and speed."
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "A____________ is one where teams are created, undertake the work and are then dissolved.",
        "options": [
            "Functional structure",
            "Matrix Structure",
            "Project based structure",
            "Transnational structure"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "_______specifies what is to be accomplished by focusing on the end result.",
        "options": [
            "Output control",
            "Behaviour control",
            "Premise control",
            "Implementation control"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "____________is control achieved through the establishment of a comprehensive system of rules and procedures to direct the actions of divisions, functions, and individuals.",
        "options": [
            "Output control",
            "Behaviour control",
            "Premise control",
            "Implementation control"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "_______checks systemically and continuously whether the assumptions on which the strategy is based are still valid.",
        "options": [
            "Output control",
            "Behaviour control",
            "Premise control",
            "Implementation control"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "A________is based on the primary activities that have to be undertaken by an organisation",
        "options": [
            "Functional structure",
            "Matrix Structure",
            "Project based structure",
            "Transnational structure"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "This test is a catch-all category, indicating that the structure must fit legal, stakeholder, trade union or similar constraints.",
        "options": [
            "The Feasibility Test",
            "The People Test",
            "The Parenting Advantage Test",
            "The Specialised Cultures Test"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "In a fast-moving world, an important test to determine the extent to which a design will allow for change in the future is called?",
        "options": [
            "The Feasibility Test",
            "The Flexibility Test",
            "The Parenting Advantage Test",
            "The Specialised Cultures Test"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Digital transformation drives change in",
        "options": [
            "customer experience",
            "operational processes",
            "business models",
            "all of the above"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "The process of digital transformation requires coordination across the entire organization, and involves business culture changes.",
        "options": [
            "digital strategy",
            "digitisation",
            "digital transformation",
            "data aggregation"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Categorising and organising the digitised data and making it ready for application of further processes is called__________ .",
        "options": [
            "Data aggregation",
            "Data management",
            "Workflow automation",
            "Process component"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Which among the following is not a characteristic of Big Data?",
        "options": [
            "Variety",
            "Volume",
            "Velocity",
            "Invariability"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Data that can be stored, accessed and processed in the form of fixed format is called .",
        "options": [
            "unstructured data",
            "semi-structured data",
            "structured data",
            "flexible data"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which among the following is not a component of a block chain?",
        "options": [
            "Distributed ledger technology",
            "Immutable record",
            "Smart contracts",
            "Increased threat"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Which among the following alternatives is not suited for Robotic process automation tools?",
        "options": [
            "Repeatable",
            "Predictable interactions with IT applications",
            "Routine",
            "Unpredictable events"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "_____________is similar to referral programs.",
        "options": [
            "Influencer Marketing",
            "Affiliate marketing",
            "Social Media Marketing Platforms",
            "Content marketing"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "____________is a form of paid advertising that allows marketing teams to essentially purchase traffic to their website.",
        "options": [
            "Influencer Marketing",
            "Affiliate marketing",
            "Pay-per-click",
            "Content marketing"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Forecasting the weather is an example of",
        "options": [
            "Narrow AI",
            "General AI/human-level",
            "Super AI",
            "Deep- learning"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "JIT stands for:",
        "options": [
            "Just in purchase",
            "Just in production",
            "Just in time use of material",
            "Just in time order the material"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Example of production by disintegration is:",
        "options": [
            "Crude oil",
            "Mineral water",
            "Automobile",
            "Locomotive"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "The act of assessing the future and make the provision for the act is known as:",
        "options": [
            "Forcasting",
            "Assessment",
            "Scheduling",
            "Planning"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "The quatities for which the planner has to prepare production plan are known as",
        "options": [
            "Optimal quantity of products",
            "planning quantity standards",
            "Quantity planning",
            "Material planning"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "PERT is __________ oriented technique:",
        "options": [
            "Event oriented technique",
            "Activity oriented technique",
            "Both (1) & (2)",
            ""
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Operations Management is primarily deals with:",
        "options": [
            "Recruitment and training of employees",
            "Conversion of inputs into outputs using physical resources",
            "Financial planning and budgeting",
            "Market research and promotion"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "What is the main objectives of Operations Management include:",
        "options": [
            "Effectiveness, efficiency, and adaptability",
            "Profitability, liquidity, and solvency",
            "Motivation, leadership, and teamwork",
            "Planning, staffing, and directing"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Under Production and Operations Management which of the following is not an activity ?",
        "options": [
            "Product Design",
            "Financial Accounting",
            "Quality Control",
            "Maintenance Management"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "The term \u201cDisappearance of Smokestacks\u201d refers to:",
        "options": [
            "Decline of heavy industries",
            "Transformation of factories into environmentally friendly, knowledge-based systems",
            "Ban on factory pollution",
            "Movement of factories to rural areas"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "The idea that \u201cSmall is Beautiful\u201d was given by:",
        "options": [
            "Peter Drucker",
            "E.F. Schumacher",
            "Henry Fayol",
            "Elton Mayo"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "The utilisation rate helps management to determine:",
        "options": [
            "Product quality",
            "Need for adding or reducing capacity",
            "Labour efficiency",
            "Machine downtime"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Facility Layout is also known as:",
        "options": [
            "Plant Location",
            "Plant Layout",
            "Facility Design",
            "Work Centre Management"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Process Layout is also known as:",
        "options": [
            "Functional Layout",
            "Product Layout",
            "Fixed Position Layout",
            "Combination Layout"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "The main advantage of process layout is:",
        "options": [
            "High volume production",
            "Low material handling cost",
            "Flexibility in operation",
            "High specialization for one product"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Material Requirement Planning (MRP) is mainly used for planning the production of:",
        "options": [
            "Services",
            "Finished goods only",
            "Raw materials only",
            "Assembled products"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "The main purpose of MRP is to:",
        "options": [
            "Minimize labour cost",
            "Ensure that materials are available when needed",
            "Increase advertising efficiency",
            "Maintain maximum stock at all times"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Which among the following is an advantage of an efficient production and inventory management system?",
        "options": [
            "Increased idle time and higher inventory levels",
            "Reduced inventory, reduced idle time, and reduced setup time",
            "Inability to adjust the master production schedule",
            "Higher sales prices and slower response to market demands"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "The Economic Lot Size or Economic Order Quantity or Economic Batch Quantity is defined as:",
        "options": [
            "The quantity of output produced in one batch that maximizes production rate",
            "The maximum quantity that can be stored in the warehouse",
            "The quantity of output produced in one batch that is most economical, resulting in the lowest average cost of production",
            "The quantity of output produced to meet immediate demand only"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "M/s Kobo Bearings Ltd., is committed to supply 24,000 bearings per annum to M/s Deluxe Fans on a steady daily basis. It is estimated that it costs 10 paisa as inventory holding cost per bearing per month and that the setup cost per run of bearing manufacture is \u20b9324.What is the optimum run size for bearing manufacture?",
        "options": [
            "3600",
            "2400",
            "2600",
            "3700"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Find the economic order quantity and the reorder point, given Annual demand (D) = 1000 units Average daily demand (d) = 1000/365 Ordering Cost (S) = \u20b95 per order Holding cost(H) =\u20b91.25 per unit per year. Lead time (L) = 5 days Cost per unit (C) = \u20b9 12.50 What quantity should be ordered?",
        "options": [
            "3612",
            "2812",
            "2612",
            "4888"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "A good product design helps an organization to:",
        "options": [
            "Reduce product features",
            "Increase production lead time",
            "Stay ahead of competition and sustain in a VUCA world",
            "Avoid product diversification"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "The Growth phase of the Product Life Cycle is characterized by:",
        "options": [
            "Decline in market share and profits",
            "Rapid increase in sales and market expansion",
            "Withdrawal of the product from the market",
            "Lack of promotional activity"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "The Decline phase of the Product Life Cycle is characterized by:",
        "options": [
            "Increasing sales and market share",
            "Higher profitability and expansion",
            "Falling sales and narrowing profit margins",
            "Introduction of new product variants"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which among the following order represents the correct stages of the Product Life Cycle ?",
        "options": [
            "Growth \u2192 Introduction \u2192 Maturity \u2192 Decline",
            "Introduction \u2192 Growth \u2192 Maturity \u2192 Decline",
            "Maturity \u2192 Growth \u2192 Introduction \u2192 Decline",
            "Introduction \u2192 Maturity \u2192 Growth \u2192 Decline"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "The main objective of an assignment problem is to:",
        "options": [
            "Increase production regardless of cost",
            "Assign workers randomly to jobs",
            "Maximize the number of workers employed",
            "Minimize total cost or time of performing all jobs"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Which of the following is not a method for solving an assignment problem?",
        "options": [
            "Complete Enumeration Method",
            "Simplex Method",
            "Regression Method",
            "Transportation Method"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Wanda\u2019s Car Wash & dry is an automatic, five-minute operation with a single bay. On a typical Saturday morning,cars arrive at a mean rate of eight per hour, with arrivals tending to follow a Poisson distribution. Find the average number of cars in line.",
        "options": [
            "0.667 Car",
            "0.167 Car",
            "10 minutes",
            "20 minutes"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Monte Carlo simulation is mainly used in for:",
        "options": [
            "Static systems only",
            "Systems without uncertainty",
            "Random or stochastic systems",
            "Deterministic systems"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "The important requirements of Monte Carlo simulation are:",
        "options": [
            "Hardware optimization",
            "Real-life experimentation",
            "Model of the system and random number generator",
            "Linear equations and constraints"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Simulation is most useful method when:",
        "options": [
            "Data is always deterministic",
            "Optimization techniques are sufficient",
            "The system is simple and can be solved mathematically",
            "The system is complex and difficult to analyze mathematically"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "In which company Lean operation has its roots?",
        "options": [
            "General Motors, USA",
            "Honda Motors, Japan",
            "Toyota Automobile Co., Japan",
            "Ford Motors, USA"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which of the following is not an objective of JIT manufacturing?",
        "options": [
            "Produce only what customers want",
            "Produce products with perfect quality",
            "Produce with zero waste",
            "Produce products before demand arises"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Continuous improvement in JIT means:",
        "options": [
            "Focusing on short-term gains",
            "Relying on external audits only",
            "Once problems are solved, no further action is needed",
            "Correcting existing problems and identifying new ones continuously"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "A factory has 13 workers producing a single product. The total output in a month of 24 working days is 370 units. What is the monthly productivity per worker?",
        "options": [
            "30",
            "28.46",
            "15.42",
            "20"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Productivity is commonly defined as:",
        "options": [
            "Output plus capital",
            "Input multiplied by time",
            "Ratio between the output volume and the volume of inputs",
            "Output minus input"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which of the following is not a method to measure employee productivity?",
        "options": [
            "Measure the amount of work completed",
            "Measure quality of work",
            "Measure goals",
            "Measure employee happiness"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Natural factors influencing productivity include:",
        "options": [
            "Industrial policy",
            "Product design",
            "Climatic and geological conditions",
            "Labour laws"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Social factors affecting productivity refer to:",
        "options": [
            "Credit facilities",
            "Market demand",
            "Culture, customs, and traditions of society",
            "Machine maintenance and downtime"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Continuous improvement in TQM is also known as:",
        "options": [
            "Six Sigma",
            "Benchmarking",
            "KAIZEN",
            "JIT"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Total Quality Management encourages:",
        "options": [
            "Individual work only",
            "Ignoring process improvements",
            "Teamwork, cooperation, and employee involvement",
            "Short-term results over long-term quality"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which of the following is not a principle of TQM?",
        "options": [
            "Quality is achieved through random inspection",
            "Continuous improvement (Kaizen)",
            "Worker involvement is essential The freedom",
            "Strive for quality in all things"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Slack signifies:",
        "options": [
            "The total float of the project",
            "The total duration of the project",
            "available to reschedule or start a job",
            "The difference between EST and EFT"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "For a job, slack time is calculated as:",
        "options": [
            "LFT + EFT",
            "EFT \u2212 LFT",
            "LFT \u2212 EFT",
            "EST \u2212 LST"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "A job with zero slack is called:",
        "options": [
            "Critical job",
            "Non-critical job",
            "Independent job",
            "Slack job"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "EFT (Earliest Finish Time) is calculated as:",
        "options": [
            "Earliest Start Time + Duration of activity",
            "Latest Start Time + Duration",
            "Latest Finish Time \u2212 Duration",
            "Earliest Start Time \u2212 Duration"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Floats represent:",
        "options": [
            "Difference between EFT and LFT",
            "Difference between maximum time available and actual time required to complete an activity",
            "Difference between EST and LST",
            "Total duration of the project"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Formula for Total Float (TF) is:",
        "options": [
            "TF = (EFT of tail event \u2212 LST of head event) \u2212 Duration",
            "TF = (EST of tail event \u2212 EFT of head event) \u2212 Duration",
            "TF = (LFT of head event \u2212 EST of tail event) \u2212 Duration",
            "TF = (LFT of head event \u2212 EST of tail event) + Duration"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "A project activity has an EFT = 12 days, LFT = 20 days. What is its slack time?",
        "options": [
            "8 days",
            "27 days",
            "0 days",
            "12 days"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "A negative total float indicates that:",
        "options": [
            "The activity has excess resources",
            "The activity can be delayed without affecting the project",
            "Resources are not adequate and the activity cannot finish on time",
            "The project is ahead of schedule Independent Float"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Free Float is a part of:",
        "options": [
            "Slack time",
            "Total Float",
            "Dummy activity",
            "only"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "Independent Float can be calculated as:",
        "options": [
            "Total Float + Slack Time of tail event",
            "Total Float \u2013 Head Slack",
            "Free Float \u2013 Tail Slack",
            "Free Float + Tail Slack"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "The main difference between slack and float is that:",
        "options": [
            "Slack refers to activities, float refers to events",
            "Both refer to events only",
            "Both refer to activities only",
            "Slack is used for events, float is used for activities"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "The time constraint in project management refers to:",
        "options": [
            "The schedule for the project to reach completion",
            "The total cost to complete a project",
            "The number of team members working on the project",
            "The availability of raw materials"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "Quality Improvement in project management refers to:",
        "options": [
            "Increasing team size for faster execution",
            "Minimizing scope to meet deadlines",
            "Applying tools to close gaps between current and desired quality levels",
            "Reducing cost of resources"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "A Gantt Chart is also known as a:",
        "options": [
            "Network diagram",
            "Line graph",
            "Bar chart",
            "Flow chart"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "A major advantage of the Gantt Chart is that it:",
        "options": [
            "Shows detailed network relationships",
            "Can easily incorporate changes in timing and machine loads",
            "Eliminates the need for manpower planning",
            "Eliminates the need for manpower planning"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "An event in a network refers to:",
        "options": [
            "A job that consumes time and money",
            "The use of physical resources",
            "The start or completion of a job that consumes no resources",
            "An interruption in the workflow"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Network analysis provides a graphical representation of:",
        "options": [
            "Profit and loss data",
            "Material flow between departments",
            "Only the critical activities",
            "All activities and events in logical sequence"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "Which of the following is not an application of network analysis?",
        "options": [
            "Aircraft manufacturing",
            "Retail store management",
            "Construction of residential complex",
            "Satellite mission development"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "The type of maintenance in which machines are repaired only after breakdown is known as:",
        "options": [
            "Scheduled maintenance",
            "Predictive maintenance",
            "Breakdown or repair maintenance",
            "Preventive maintenance"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which of the following is an analytical measure used to evaluate preventive maintenance effectiveness?",
        "options": [
            "Hours worked for maintenance / Scheduled hours \u00d7 100",
            "Inspections incomplete / Inspections scheduled \u00d7 100",
            "Frequency of breakdowns = Number of breakdowns / Available machine hours",
            "All of the above"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "One of the key advantages of preventive maintenance is:",
        "options": [
            "Increased work content of maintenance jobs",
            "Reduced breakdowns and downtime",
            "Reduced safety of workers",
            "Increased downtime"
        ],
        "answer": 1,
        "explanation": ""
    },
    {
        "question": "What does running maintenance typically include?",
        "options": [
            "Installation of new machinery",
            "Only major repairs after equipment failure",
            "Lubrication, cleaning, and periodic overhaul while the equipment is in operation or during preplanned shutdowns",
            "Outsourcing all maintenance work"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "What are the two main causes for the replacement of machinery?",
        "options": [
            "Wear and obsolescence",
            "Technological improvement and breakdowns",
            "Wear and depreciation",
            "Maintenance and repair costs"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "One reason for replacing a machine before its expected life is:",
        "options": [
            "To reduce factory space",
            "To avoid preventive maintenance",
            "To reduce running costs and increase productivity",
            "To increase downtime"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "Which of the following is NOT a classification of spare parts?",
        "options": [
            "Regular Spares",
            "Insurance Spares",
            "Capital Spares",
            "Temporary Spares"
        ],
        "answer": 3,
        "explanation": ""
    },
    {
        "question": "What is the primary purpose of a vision statement in an organization?",
        "options": [
            "To outline the company's current operations and processes.",
            "To list the company's products and services.",
            "To define the desired future state and aspirations of the organization.",
            "To describe the company's financial goals."
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "What does the \"F\" in the FAST goal-setting framework stand for?",
        "options": [
            "Financially viable",
            "Fully achievable",
            "Frequently discussed",
            "Fully transparent"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "What does EVA stand for in financial performance metrics?",
        "options": [
            "Equity Value Added",
            "Earnings Value Added",
            "Economic Value Added",
            "Earnings Variance Analysis"
        ],
        "answer": 2,
        "explanation": ""
    },
    {
        "question": "The dynamic nature of the business environment requires businesses to:",
        "options": [
            "Continuously adapt to changes and anticipate future trends",
            "Maintain a static approach to operations",
            "Ignore external changes and focus only on internal factors",
            "Rely solely on historical data for decision-making"
        ],
        "answer": 0,
        "explanation": ""
    },
    {
        "question": "A company develops a new recycling process to reduce waste. Which PESTEL factor is it responding to?",
        "options": [
            "Environmental",
            "Technological",
            "Economic",
            "Political"
        ],
        "answer": 0,
        "explanation": ""
    }
]
          },
          {
            label: "Corporate Accounting",
            questions: []
          },
          {
            label: "FM & BDA",
            questions: []
          },
          {
            label: "Management Accounting",
            questions: []
          }
        ]
      }
    ]
  },
  Final: {
    label: "Final",
    groups: [
      {
        label: "Group-3",
        subjects: [
          {
            label: "Corporate & Economic Law",
            questions: []
          },
          {
            label: "SFM",
            questions: []
          },
          {
            label: "DT",
            questions: []
          },
          {
            label: "SCM",
            questions: []
          }
        ]
      },
      {
        label: "Group-4",
        subjects: [
          {
            label: "CMA",
            questions: []
          },
          {
            label: "CFR",
            questions: []
          },
          {
            label: "IDT",
            questions: []
          },
          {
            label: "Electives",
            questions: []
          }
        ]
      }
    ]
  }
};

const levelList = document.getElementById("cma-level-list");
const groupList = document.getElementById("cma-group-list");
const subjectLabel = document.getElementById("cma-subject-label");
const questionCount = document.getElementById("cma-question-count");
const questionText = document.getElementById("cma-question");
const optionsWrap = document.getElementById("cma-options");
const feedback = document.getElementById("cma-feedback");
const backButton = document.getElementById("cma-back");
const prevButton = document.getElementById("cma-prev");
const nextButton = document.getElementById("cma-next");
const scoreText = document.getElementById("cma-score");
const progressText = document.getElementById("cma-progress");
const pathPanel = document.querySelector(".cma-path-panel");
const quizCard = document.querySelector(".cma-quiz-card");

const levels = Object.keys(cmaCourseMap);
let activeLevel = "";
let activeGroup = "";
let activeSubject = null;
let activeIndex = 0;
let answers = {};

function showCourseSelector() {
  pathPanel.hidden = false;
  quizCard.classList.remove("is-open");
}

function showQuizView() {
  pathPanel.hidden = true;
  quizCard.classList.add("is-open");
  quizCard.scrollIntoView({ behavior: "smooth", block: "start" });
}

function getActiveSubjectData() {
  if (!activeSubject) return null;

  const level = cmaCourseMap[activeSubject.level];
  const group = level?.groups.find((item) => item.label === activeSubject.group);
  return group?.subjects.find((item) => item.label === activeSubject.subject) || null;
}

function getSubjectQuestions() {
  return getActiveSubjectData()?.questions || [];
}

function getAnswerKey() {
  if (!activeSubject) return "";
  return `${activeSubject.level}-${activeSubject.group}-${activeSubject.subject}-${activeIndex}`;
}

function getSubjectKey(subject) {
  return `${subject.level}-${subject.group}-${subject.subject}`;
}

function updateScore() {
  const activeKey = activeSubject ? getSubjectKey(activeSubject) : "";
  const keys = Object.keys(answers).filter((key) => key.startsWith(activeKey));
  const correct = keys.filter((key) => answers[key].isCorrect).length;

  scoreText.textContent = `${correct} / ${keys.length}`;
  progressText.textContent = keys.length ? `${keys.length} question${keys.length === 1 ? "" : "s"} attempted in this subject.` : "Start a quiz to track progress.";
}

function setEmptyQuiz(message, label = "Choose a subject") {
  subjectLabel.textContent = label;
  questionCount.textContent = "Question 0 of 0";
  questionText.textContent = message;
  optionsWrap.innerHTML = "";
  feedback.hidden = true;
  feedback.textContent = "";
  feedback.className = "cma-feedback";
  prevButton.disabled = true;
  nextButton.disabled = true;
  updateScore();
}

function renderLevels() {
  levelList.innerHTML = "";

  levels.forEach((levelName) => {
    const level = cmaCourseMap[levelName];
    const card = document.createElement("button");
    card.type = "button";
    card.className = "cma-level-card";
    card.classList.toggle("active", levelName === activeLevel);

    const title = document.createElement("span");
    title.textContent = level.label;

    card.addEventListener("click", () => {
      activeLevel = levelName;
      activeGroup = "";
      activeSubject = null;
      activeIndex = 0;
      renderLevels();
      renderSelectionPanel();
      showCourseSelector();
    });

    card.appendChild(title);
    levelList.appendChild(card);
  });
}

function renderSelectionPanel() {
  if (!activeLevel) {
    groupList.innerHTML = "";
    groupList.className = "cma-group-list";
    return;
  }

  const level = cmaCourseMap[activeLevel];
  groupList.innerHTML = "";

  if (!level.groups.length) {
    groupList.className = "cma-group-list cma-group-count-1";
    const unavailable = document.createElement("div");
    unavailable.className = "cma-unavailable-card";
    unavailable.textContent = level.unavailableMessage || "Available soon.";
    groupList.appendChild(unavailable);
    return;
  }

  if (!activeGroup) {
    groupList.className = `cma-group-list cma-group-count-${level.groups.length}`;
    level.groups.forEach((group) => {
      const groupCard = document.createElement("button");
      groupCard.type = "button";
      groupCard.className = "cma-group-card";
      groupCard.addEventListener("click", () => {
        activeGroup = group.label;
        activeSubject = null;
        activeIndex = 0;
        renderSelectionPanel();
      });

      const title = document.createElement("span");
      title.textContent = group.label;

      groupCard.appendChild(title);
      groupList.appendChild(groupCard);
    });
    return;
  }

  const selectedGroup = level.groups.find((group) => group.label === activeGroup);
  groupList.className = "cma-group-list cma-group-count-1";

  if (!selectedGroup) return;

  const backToGroups = document.createElement("button");
  backToGroups.type = "button";
  backToGroups.className = "cma-group-back";
  backToGroups.textContent = "Back to Groups";
  backToGroups.addEventListener("click", () => {
    activeGroup = "";
    activeSubject = null;
    renderSelectionPanel();
  });
  groupList.appendChild(backToGroups);

  const groupCard = document.createElement("article");
  groupCard.className = "cma-group-card";

  const title = document.createElement("h3");
  title.textContent = selectedGroup.label;

  const subjects = document.createElement("div");
  subjects.className = "cma-subject-list";

  selectedGroup.subjects.forEach((subject) => {
    const button = document.createElement("button");
    const nextSubject = {
      level: activeLevel,
      group: selectedGroup.label,
      subject: subject.label
    };
    const hasQuestions = subject.questions.length > 0;
    const isActive = activeSubject && getSubjectKey(activeSubject) === getSubjectKey(nextSubject);

    button.type = "button";
    button.className = "cma-subject-button";
    button.textContent = subject.label;
    button.classList.toggle("active", isActive);
    button.classList.toggle("is-empty", !hasQuestions);
    button.setAttribute("aria-current", isActive ? "true" : "false");
    button.title = hasQuestions ? `${subject.questions.length} MCQ${subject.questions.length === 1 ? "" : "s"}` : "MCQs not added yet";
    button.addEventListener("click", () => {
      activeSubject = nextSubject;
      activeIndex = 0;
      renderSelectionPanel();
      renderQuestion();
      showQuizView();
    });

    subjects.appendChild(button);
  });

  groupCard.append(title, subjects);
  groupList.appendChild(groupCard);
}

function renderFeedback(selectedIndex) {
  const question = getSubjectQuestions()[activeIndex];
  const isCorrect = selectedIndex === question.answer;

  feedback.hidden = false;
  feedback.className = `cma-feedback ${isCorrect ? "is-correct" : "is-wrong"}`;
  feedback.innerHTML = `
    <strong>${isCorrect ? "Correct" : "Review this one"}</strong>
    <p>${question.explanation || "Explanation will be added soon."}</p>
  `;
}

function selectOption(selectedIndex) {
  const question = getSubjectQuestions()[activeIndex];
  answers[getAnswerKey()] = {
    selectedIndex,
    isCorrect: selectedIndex === question.answer
  };
  renderQuestion();
}

function renderQuestion() {
  if (!activeSubject) {
    setEmptyQuiz("Select Intermediate or Final, then choose a subject to start practicing.");
    return;
  }

  const subject = getActiveSubjectData();
  const questions = getSubjectQuestions();
  const label = `${activeSubject.level} / ${activeSubject.group} / ${activeSubject.subject}`;

  if (!subject || !questions.length) {
    setEmptyQuiz("MCQs for this subject will be added soon.", label);
    return;
  }

  const question = questions[activeIndex];
  const savedAnswer = answers[getAnswerKey()];

  subjectLabel.textContent = label;
  questionCount.textContent = `Question ${activeIndex + 1} of ${questions.length}`;
  questionText.textContent = question.question;
  optionsWrap.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "cma-option";
    button.textContent = option;
    button.addEventListener("click", () => selectOption(index));

    if (savedAnswer) {
      button.disabled = true;
      if (index === question.answer) {
        button.classList.add("is-correct");
      } else if (index === savedAnswer.selectedIndex) {
        button.classList.add("is-wrong");
      }
    }

    optionsWrap.appendChild(button);
  });

  if (savedAnswer) {
    renderFeedback(savedAnswer.selectedIndex);
  } else {
    feedback.hidden = true;
    feedback.textContent = "";
    feedback.className = "cma-feedback";
  }

  prevButton.disabled = activeIndex === 0;
  nextButton.disabled = activeIndex === questions.length - 1;
  updateScore();
}

prevButton.addEventListener("click", () => {
  activeIndex = Math.max(0, activeIndex - 1);
  renderQuestion();
});

nextButton.addEventListener("click", () => {
  const questions = getSubjectQuestions();
  activeIndex = Math.min(questions.length - 1, activeIndex + 1);
  renderQuestion();
});

backButton.addEventListener("click", () => {
  showCourseSelector();
});

renderLevels();
renderSelectionPanel();
showCourseSelector();
